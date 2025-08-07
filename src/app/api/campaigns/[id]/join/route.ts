import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Присоединиться к кампании
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 })
    }

    const { id } = await params

    // Проверяем, существует ли кампания
    const campaign = await prisma.campaign.findUnique({
      where: { id },
      include: {
        players: {
          where: { userId: session.user.id }
        }
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: "Кампания не найдена" },
        { status: 404 }
      )
    }

    // Проверяем, не присоединился ли уже пользователь
    if (campaign.players.length > 0) {
      return NextResponse.json(
        { error: "Вы уже участвуете в этой кампании" },
        { status: 400 }
      )
    }

    // Добавляем игрока к кампании
    try {
      await prisma.campaignPlayer.create({
        data: {
          campaignId: id,
          userId: session.user.id
        }
      })
    } catch (prismaError: any) {
      // Обрабатываем ошибку уникального ограничения
      if (prismaError.code === 'P2002') {
        return NextResponse.json(
          { error: "Вы уже участвуете в этой кампании" },
          { status: 400 }
        )
      }
      throw prismaError
    }

    // Возвращаем обновленную кампанию
    const updatedCampaign = await prisma.campaign.findUnique({
      where: { id },
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

    return NextResponse.json(updatedCampaign)
  } catch (error) {
    console.error("Ошибка присоединения к кампании:", error)
    return NextResponse.json(
      { error: "Ошибка при присоединении к кампании" },
      { status: 500 }
    )
  }
}
