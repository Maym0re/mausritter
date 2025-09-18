import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// List all campaigns accessible to current user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const campaigns = await prisma.campaign.findMany({
      where: {
        OR: [
          { gmId: session.user.id }, // Campaigns where user is GM
          {
            players: {
              some: { userId: session.user.id } // Campaigns where user is a player
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
    console.error("Failed to fetch campaigns:", error)
    return NextResponse.json(
      { error: "Failed to fetch campaigns" },
      { status: 500 }
    )
  }
}

// Create new campaign
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, description } = await request.json()

    if (!name) {
      return NextResponse.json(
        { error: "Campaign name is required" },
        { status: 400 }
      )
    }

    const result = await prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.create({
        data: {
          name,
          description,
          gmId: session.user.id,
          players: { create: { userId: session.user.id } }
        },
        include: {
          gm: { select: { id: true, name: true, email: true } },
          players: { include: { user: { select: { id: true, name: true, email: true } } } },
          _count: { select: { players: true, characters: true } }
        }
      });

      const hexMap = await tx.hexMap.create({
        data: { campaignId: campaign.id, size: 5, centerX: 0, centerY: 0 }
      });

      const baseHexTypeId = 'countryside';
      let baseHexType = await tx.hexType.findUnique({ where: { id: baseHexTypeId } });
      if (!baseHexType) {
        baseHexType = await tx.hexType.create({
          data: {
            id: baseHexTypeId,
            name: 'Countryside',
            color: '#F5F5F5',
            description: 'Open fields and farmland'
          }
        });
      }

      const settlement = await tx.settlement.create({
        data: {
          id: `settlement_${Date.now()}`,
            name: name.length > 32 ? name.slice(0, 32) : name,
            size: 'HAMLET',
            governance: 'Local elders',
            inhabitants: 'Mice',
            feature: 'Central stump square',
            industry: 'Foraging & trade',
            event: 'Peaceful',
            population: 40
        }
      });

      await tx.hexCell.create({
        data: {
          hexMapId: hexMap.id,
          q: 0,
          r: 0,
          s: 0,
          hexTypeId: baseHexType.id,
          settlementId: settlement.id,
          isRevealed: true,
          customName: name.length > 18 ? name.slice(0, 18) : name,
          notes: '',
          masterNotes: ''
        }
      });

      return campaign;
    });

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("Failed to create campaign:", error);
    return NextResponse.json(
      { error: "Failed to create campaign", detail: (process.env.NODE_ENV !== 'production' ? String(error) : undefined) },
      { status: 500 }
    )
  }
}
