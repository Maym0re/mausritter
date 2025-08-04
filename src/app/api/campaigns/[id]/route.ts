import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Получить данные кампании
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

    const campaign = await prisma.campaign.findFirst({
      where: {
        id,
        OR: [
          { gmId: session.user.id }, // Пользователь является GM
          {
            players: {
              some: { userId: session.user.id } // Пользователь является игроком
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
        characters: true,
        hexMap: true
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: "Кампания не найдена" },
        { status: 404 }
      )
    }

    return NextResponse.json(campaign)
  } catch (error) {
    console.error("Ошибка получения кампании:", error)
    return NextResponse.json(
      { error: "Ошибка при получении кампании" },
      { status: 500 }
    )
  }
}

// Обновить кампанию
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { id } = await params

    // Проверяем, что пользователь является GM кампании
    const existingCampaign = await prisma.campaign.findFirst({
      where: {
        id,
        gmId: session.user.id
      }
    })

    if (!existingCampaign) {
      return NextResponse.json(
        { error: "Кампания не найдена или нет прав на редактирование" },
        { status: 404 }
      )
    }

    const updateData = await request.json()

    const campaign = await prisma.campaign.update({
      where: { id },
      data: updateData,
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
        characters: true,
        hexMap: true
      }
    })

    return NextResponse.json(campaign)
  } catch (error) {
    console.error("Ошибка обновления кампании:", error)
    return NextResponse.json(
      { error: "Ошибка при обновлении кампании" },
      { status: 500 }
    )
  }
}

// Удалить кампанию
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

    // Проверяем, что пользователь является GM кампании
    const existingCampaign = await prisma.campaign.findFirst({
      where: {
        id,
        gmId: session.user.id
      }
    })

    if (!existingCampaign) {
      return NextResponse.json(
        { error: "Кампания не найдена или нет прав на удаление" },
        { status: 404 }
      )
    }

    await prisma.campaign.delete({
      where: { id }
    })

    return NextResponse.json({ message: "Кампания удалена" })
  } catch (error) {
    console.error("Ошибка удаления кампании:", error)
    return NextResponse.json(
      { error: "Ошибка при удалении кампании" },
      { status: 500 }
    )
  }
}
