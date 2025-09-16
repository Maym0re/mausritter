import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Update character
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const { characterData } = await request.json()

    console.log('PUT Request data:', { characterData, sessionUserId: session.user.id })

    if (!characterData) {
      return NextResponse.json(
        { error: "Character data is required" },
        { status: 400 }
      )
    }

    // Access check: character must belong to a campaign where user is GM or player
    const character = await prisma.character.findFirst({
      where: {
        id,
        campaign: {
          OR: [
            { gmId: session.user.id },
            { players: { some: { userId: session.user.id } } }
          ]
        }
      },
      include: {
        campaign: true
      }
    })

    if (!character) {
      return NextResponse.json(
        { error: "Character not found or no permission" },
        { status: 404 }
      )
    }

    // Обновляем персонажа - исключаем только системные поля и связанные объекты
    const {
      playerId,
      campaignId,
      id: characterId,
      createdAt,
      updatedAt,
      player,
      campaign,
      background,
      birthsign,
      coat,
      inventory,
      conditions,
      ...updateData
    } = characterData;

    console.log('Update data:', updateData)

    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: updateData,
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
      }
    })

    console.log('Updated character result:', updatedCharacter)

    return NextResponse.json(updatedCharacter)
  } catch (error) {
    console.error("Failed to update character:", error)
    return NextResponse.json(
      { error: "Failed to update character" },
      { status: 500 }
    )
  }
}

// Get character
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

    console.log('GET Request:', { id, sessionUserId: session.user.id })

    // Access check
    const character = await prisma.character.findFirst({
      where: {
        id,
        campaign: {
          OR: [
            { gmId: session.user.id },
            { players: { some: { userId: session.user.id } } }
          ]
        }
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
      }
    })

    console.log('GET Character result:', character)

    if (!character) {
      return NextResponse.json(
        { error: "Character not found or no access" },
        { status: 404 }
      )
    }

    return NextResponse.json(character)
  } catch (error) {
    console.error("Failed to fetch character:", error)
    return NextResponse.json(
      { error: "Failed to fetch character" },
      { status: 500 }
    )
  }
}

// Delete character
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

    // Access check
    const character = await prisma.character.findFirst({
      where: {
        id,
        campaign: {
          OR: [
            { gmId: session.user.id },
            { players: { some: { userId: session.user.id } } }
          ]
        }
      }
    })

    if (!character) {
      return NextResponse.json(
        { error: "Character not found or no permission to delete" },
        { status: 404 }
      )
    }

    await prisma.character.delete({
      where: { id }
    })

    return NextResponse.json({ message: "Character deleted" })
  } catch (error) {
    console.error("Failed to delete character:", error)
    return NextResponse.json(
      { error: "Failed to delete character" },
      { status: 500 }
    )
  }
}
