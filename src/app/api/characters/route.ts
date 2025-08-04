import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Получить персонажей кампании
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const campaignId = searchParams.get('campaignId')

    if (!campaignId) {
      return NextResponse.json({ error: "ID кампании обязателен" }, { status: 400 })
    }

    // Проверяем доступ к кампании
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        OR: [
          { gmId: session.user.id }, // Пользователь является GM
          {
            players: {
              some: { userId: session.user.id } // Пользователь является игроком
            }
          }
        ]
      }
    })

    if (!campaign) {
      return NextResponse.json({ error: "Кампания не найдена" }, { status: 404 })
    }

    // Получаем персонажей кампании
    const characters = await prisma.character.findMany({
      where: {
        campaignId,
        isActive: true
      },
      include: {
        player: {
          select: { id: true, name: true, email: true }
        },
        campaign: {
          select: { id: true, name: true }
        }
      },
      orderBy: { createdAt: "desc" }
    })

    return NextResponse.json(characters)
  } catch (error) {
    console.error("Ошибка получения персонажей:", error)
    return NextResponse.json(
      { error: "Ошибка при получении персонажей" },
      { status: 500 }
    )
  }
}

// Создать нового персонажа
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { campaignId, characterData } = await request.json()

    if (!campaignId || !characterData) {
      return NextResponse.json(
        { error: "ID кампании и данные персонажа обязательны" },
        { status: 400 }
      )
    }

    // Проверяем доступ к кампании
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        OR: [
          { gmId: session.user.id }, // GM может создавать персонажей
          {
            players: {
              some: { userId: session.user.id } // Игрок может создать своего персонажа
            }
          }
        ]
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: "Кампания не найдена или нет прав на создание персонажа" },
        { status: 404 }
      )
    }

    // Создаем персонажа
    const character = await prisma.character.create({
      data: {
        ...characterData,
        playerId: session.user.id,
        campaignId
      },
      include: {
        player: {
          select: { id: true, name: true, email: true }
        },
        campaign: {
          select: { id: true, name: true }
        }
      }
    })

    return NextResponse.json(character, { status: 201 })
  } catch (error) {
    console.error("Ошибка создания персонажа:", error)
    return NextResponse.json(
      { error: "Ошибка при создании персонажа" },
      { status: 500 }
    )
  }
}
