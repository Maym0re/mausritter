import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Join a campaign
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Check campaign exists
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
        { error: "Campaign not found" },
        { status: 404 }
      )
    }

    // Check not already joined
    if (campaign.players.length > 0) {
      return NextResponse.json(
        { error: "Already participating in this campaign" },
        { status: 400 }
      )
    }

    // Add player to campaign
    try {
      await prisma.campaignPlayer.create({
        data: {
          campaignId: id,
          userId: session.user.id
        }
      })
    } catch (prismaError) {
      throw prismaError
    }

    // Return updated campaign
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
    console.error("Failed to join campaign:", error)
    return NextResponse.json(
      { error: "Failed to join campaign" },
      { status: 500 }
    )
  }
}
