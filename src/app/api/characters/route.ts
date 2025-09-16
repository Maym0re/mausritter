import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Get characters of a campaign
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const campaignId = searchParams.get('campaignId')

    if (!campaignId) {
      return NextResponse.json({ error: "campaignId is required" }, { status: 400 })
    }

    // Check campaign access
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        OR: [
          { gmId: session.user.id }, // User is GM
          {
            players: {
              some: { userId: session.user.id } // User is a player
            }
          }
        ]
      },
    })

    if (!campaign) {
      return NextResponse.json({ error: "Campaign not found" }, { status: 404 })
    }

    // Fetch active characters
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
    console.error("Failed to fetch characters:", error)
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    )
  }
}

// Create new character
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { campaignId, characterData } = await request.json()

    if (!campaignId || !characterData) {
      return NextResponse.json(
        { error: "campaignId and character data are required" },
        { status: 400 }
      )
    }

    // Check campaign access (GM or player)
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        OR: [
          { gmId: session.user.id }, // GM can create
          {
            players: {
              some: { userId: session.user.id } // Player can create own character
            }
          }
        ]
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: "Campaign not found or no permission to create character" },
        { status: 404 }
      )
    }

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

    // Create or reuse background
    const backgroundRecord = await prisma.background.upsert({
      where: { name: background.name },
      update: {},
      create: {
        name: background.name,
        itemA: background.itemA,
        itemB: background.itemB
      }
    });

    // Create or reuse birthsign
    const birthsignRecord = await prisma.birthsign.upsert({
      where: { sign: birthsign.sign },
      update: {},
      create: {
        sign: birthsign.sign,
        disposition: birthsign.disposition
      }
    });

    // Create or reuse coat
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

    // Create character
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

    // Bulk create inventory items
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

    // Fetch full character with inventory
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
    console.error("Failed to create character:", error)
    return NextResponse.json(
      { error: "Failed to create character" },
      { status: 500 }
    )
  }
}
