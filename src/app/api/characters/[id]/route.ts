import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Обновить персонажа
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { id } = await params
    const { characterData } = await request.json()

    if (!characterData) {
      return NextResponse.json(
        { error: "Данные персонажа обязательны" },
        { status: 400 }
      )
    }

    // Проверяем права доступа к персонажу
    const character = await prisma.character.findFirst({
      where: {
        id,
        OR: [
          { playerId: session.user.id }, // Владелец персонажа
          {
            campaign: {
              gmId: session.user.id // Мастер кампании
            }
          }
        ]
      },
      include: {
        campaign: true
      }
    })

    if (!character) {
      return NextResponse.json(
        { error: "Персонаж не найден или нет прав на редактирование" },
        { status: 404 }
      )
    }

    // Обновляем персонажа
    const { playerId, campaignId, id: characterId, createdAt, updatedAt, player, campaign, ...updateData } = characterData;
    
    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: updateData,
      include: {
        player: {
          select: { id: true, name: true, email: true }
        },
        campaign: {
          select: { id: true, name: true }
        }
      }
    })

    return NextResponse.json(updatedCharacter)
  } catch (error) {
    console.error("Ошибка обновления персонажа:", error)
    return NextResponse.json(
      { error: "Ошибка при обновлении персонажа" },
      { status: 500 }
    )
  }
}

// Получить персонажа
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { id } = await params

    // Проверяем права доступа к персонажу
    const character = await prisma.character.findFirst({
      where: {
        id,
        OR: [
          { playerId: session.user.id }, // Владелец персонажа
          {
            campaign: {
              gmId: session.user.id // Мастер кампании
            }
          }
        ]
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

    if (!character) {
      return NextResponse.json(
        { error: "Персонаж не найден или нет прав доступа" },
        { status: 404 }
      )
    }

    return NextResponse.json(character)
  } catch (error) {
    console.error("Ошибка получения персонажа:", error)
    return NextResponse.json(
      { error: "Ошибка при получении персонажа" },
      { status: 500 }
    )
  }
}

// Удалить персонажа
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { id } = await params

    // Проверяем права доступа к персонажу
    const character = await prisma.character.findFirst({
      where: {
        id,
        playerId: session.user.id
      }
    })

    if (!character) {
      return NextResponse.json(
        { error: "Персонаж не найден или нет прав на удаление" },
        { status: 404 }
      )
    }

    await prisma.character.delete({
      where: { id }
    })

    return NextResponse.json({ message: "Персонаж удален" })
  } catch (error) {
    console.error("Ошибка удаления персонажа:", error)
    return NextResponse.json(
      { error: "Ошибка при удалении персонажа" },
      { status: 500 }
    )
  }
}
