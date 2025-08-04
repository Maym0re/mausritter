import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Получить все кампании пользователя
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const campaigns = await prisma.campaign.findMany({
      where: {
        OR: [
          { gmId: session.user.id }, // Кампании, где пользователь GM
          {
            players: {
              some: { userId: session.user.id } // Кампании, где пользователь игрок
            }
          }
        ]
      },
      include: {
        gm: {
          select: { id: true, name: true, email: true }
        },
        players: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        },
        characters: {
          where: { playerId: session.user.id },
          select: { id: true, name: true, isActive: true }
        },
        _count: {
          select: {
            players: true,
            characters: true
          }
        }
      },
      orderBy: { updatedAt: "desc" }
    })

    return NextResponse.json(campaigns)
  } catch (error) {
    console.error("Ошибка получения кампаний:", error)
    return NextResponse.json(
      { error: "Ошибка при получении кампаний" },
      { status: 500 }
    )
  }
}

// Создать новую кампанию
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { name, description } = await request.json()

    if (!name) {
      return NextResponse.json(
        { error: "Название кампании обязательно" },
        { status: 400 }
      )
    }

    const campaign = await prisma.campaign.create({
      data: {
        name,
        description,
        gmId: session.user.id,
        players: {
          create: {
            userId: session.user.id
          }
        }
      },
      include: {
        gm: {
          select: { id: true, name: true, email: true }
        },
        players: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        },
        _count: {
          select: {
            players: true,
            characters: true
          }
        }
      }
    })

    return NextResponse.json(campaign, { status: 201 })
  } catch (error) {
    console.error("Ошибка создания кампании:", error)
    return NextResponse.json(
      { error: "Ошибка при создании кампании" },
      { status: 500 }
    )
  }
}
