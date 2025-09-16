import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Get campaign data
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // First check campaign existence
    const campaign = await prisma.campaign.findUnique({
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
        characters: {
					include: {
						player: {
							select: { id: true, name: true, email: true }
						},
						background: true,
						birthsign: true,
						coat: true,
						inventory: true,
						conditions: true,
					}
        },
        hexMap: true
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: "Campaign not found" },
        { status: 404 }
      )
    }

    // Check if user participates in campaign
    const isGM = campaign.gmId === session.user.id
    const isPlayer = campaign.players.some(p => p.userId === session.user.id)
    const isParticipant = isGM || isPlayer

    // If not participant return limited info (for invite)
    if (!isParticipant) {
      return NextResponse.json({
        id: campaign.id,
        name: campaign.name,
        description: campaign.description,
        isActive: campaign.isActive,
        gm: campaign.gm,
        players: campaign.players,
        _count: {
          players: campaign.players.length,
          characters: campaign.characters.length
        }
      })
    }

    // If participant return full info
    return NextResponse.json(campaign)
  } catch (error) {
    console.error("Failed to fetch campaign:", error)
    return NextResponse.json(
      { error: "Failed to fetch campaign" },
      { status: 500 }
    )
  }
}

// Update campaign
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Ensure user is GM
    const existingCampaign = await prisma.campaign.findFirst({
      where: {
        id,
        gmId: session.user.id
      }
    })

    if (!existingCampaign) {
      return NextResponse.json(
        { error: "Campaign not found or no permission" },
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
    console.error("Failed to update campaign:", error)
    return NextResponse.json(
      { error: "Failed to update campaign" },
      { status: 500 }
    )
  }
}

// Delete campaign
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Ensure user is GM
    const existingCampaign = await prisma.campaign.findFirst({
      where: {
        id,
        gmId: session.user.id
      }
    })

    if (!existingCampaign) {
      return NextResponse.json(
        { error: "Campaign not found or no permission" },
        { status: 404 }
      )
    }

    await prisma.campaign.delete({
      where: { id }
    })

    return NextResponse.json({ message: "Campaign deleted" })
  } catch (error) {
    console.error("Failed to delete campaign:", error)
    return NextResponse.json(
      { error: "Failed to delete campaign" },
      { status: 500 }
    )
  }
}
