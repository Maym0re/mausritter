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
      },
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
		    },
		    background: true,
		    birthsign: true,
		    coat: true,
		    inventory: true,
		    conditions: true,
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
    const session = await getServerSession(authOptions);

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
    const {
      id,
      playerId,
      player,
      createdAt,
      updatedAt,
      isActive,
      background,
      birthsign,
      coat,
      inventory,
      conditions,
      ...characterDataForCreate
    } = characterData;

    console.log('Session user ID:', session.user.id);
    console.log('Character data before filtering:', characterData);
    console.log('Character data for create:', characterDataForCreate);

    // Создаем или находим background
    const backgroundRecord = await prisma.background.upsert({
      where: { name: background.name },
      update: {},
      create: {
        name: background.name,
        itemA: background.itemA,
        itemB: background.itemB
      }
    });

    // Создаем или находим birthsign
    const birthsignRecord = await prisma.birthsign.upsert({
      where: { sign: birthsign.sign },
      update: {},
      create: {
        sign: birthsign.sign,
        disposition: birthsign.disposition
      }
    });

    // Создаем или находим coat
    const coatRecord = await prisma.coat.upsert({
      where: {
        color_pattern: {
          color: coat.color,
          pattern: coat.pattern
        }
      },
      update: {},
      create: {
        color: coat.color,
        pattern: coat.pattern
      }
    });

    // Создаем персонажа
    const character = await prisma.character.create({
      data: {
        ...characterDataForCreate,
        playerId: session.user.id,
        campaignId: campaign.id,
        backgroundId: backgroundRecord.id,
        birthsignId: birthsignRecord.id,
        coatId: coatRecord.id,
        isActive: true
      },
      include: {
        player: {
          select: { id: true, name: true, email: true }
        },
        campaign: {
          select: { id: true, name: true }
        },
        background: true,
        birthsign: true,
        coat: true
      }
    });

    // Создаем предметы инвентаря
    if (inventory && inventory.length > 0) {
      await prisma.inventoryItem.createMany({
        data: inventory.map((item: any) => ({
          characterId: character.id,
          name: item.name,
          type: item.type,
          size: item.size,
          usage: item.usage || 0,
          maxUsage: item.maxUsage || 3,
          description: item.description,
          value: item.value,
          slotType: item.slotType,
          slotIndex: item.slotIndex
        }))
      });
    }

    // Получаем полный персонаж с инвентарем
    const fullCharacter = await prisma.character.findUnique({
      where: { id: character.id },
      include: {
        player: {
          select: { id: true, name: true, email: true }
        },
        campaign: {
          select: { id: true, name: true }
        },
        background: true,
        birthsign: true,
        coat: true,
        inventory: true,
        conditions: true
      }
    });

    return NextResponse.json(fullCharacter, { status: 201 })
  } catch (error) {
    console.error("Ошибка создания персонажа:", error)
    return NextResponse.json(
      { error: "Ошибка при создании персонажа" },
      { status: 500 }
    )
  }
}
