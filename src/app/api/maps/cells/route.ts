import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// PUT /api/maps/cells - обновить ячейку карты
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      hexMapId,
      q,
      r,
      s,
      hexTypeId,
      landmarkId,
      landmarkDetailId,
      settlementId,
      isRevealed,
      notes,
      customName,
      masterNotes
    } = body;

    if (!hexMapId || q === undefined || r === undefined || s === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const hexMap = await prisma.hexMap.findUnique({
      where: { id: hexMapId },
      include: { campaign: { include: { players: true } } }
    });
    if (!hexMap) return NextResponse.json({ error: 'Map not found' }, { status: 404 });

    const campaign = hexMap.campaign;
    const isGM = campaign.gmId === session.user.id;
    const isPlayer = campaign.players.some(p => p.userId === session.user.id);
    if (!isGM && !isPlayer) return NextResponse.json({ error: 'Access denied' }, { status: 403 });

    // Игрок может менять только notes
    if (!isGM) {
      const attemptedOtherChange = [hexTypeId, landmarkId, landmarkDetailId, settlementId, customName, masterNotes, isRevealed]
        .some(v => v !== undefined && v !== null);
      if (attemptedOtherChange) {
        return NextResponse.json({ error: 'Only GM can edit anything except notes' }, { status: 403 });
      }
    }

    // masterNotes и isRevealed может менять только ГМ (доп.проверка)
    if (!isGM && (masterNotes !== undefined || isRevealed !== undefined)) {
      return NextResponse.json({ error: 'Only GM can edit masterNotes or isRevealed' }, { status: 403 });
    }

    const hexCell = await prisma.hexCell.upsert({
      where: { hexMapId_q_r_s: { hexMapId, q, r, s } },
      update: isGM ? {
        ...(hexTypeId && { hexTypeId }),
        ...(landmarkId !== undefined && { landmarkId }),
        ...(landmarkDetailId !== undefined && { landmarkDetailId }),
        ...(settlementId !== undefined && { settlementId }),
        ...(isRevealed !== undefined && { isRevealed }),
        ...(notes !== undefined && { notes }),
        ...(customName !== undefined && { customName }),
        ...(masterNotes !== undefined && { masterNotes })
      } : {
        ...(notes !== undefined && { notes })
      },
      create: {
        hexMapId,
        q,
        r,
        s,
        hexTypeId: hexTypeId || 'countryside',
        landmarkId: isGM ? landmarkId : undefined,
        landmarkDetailId: isGM ? landmarkDetailId : undefined,
        settlementId: isGM ? settlementId : undefined,
        isRevealed: isGM ? (isRevealed ?? false) : false,
        notes: notes || '',
        customName: isGM ? customName : undefined,
        masterNotes: isGM && masterNotes ? masterNotes : ''
      },
      include: { hexType: true, landmark: true, landmarkDetail: true, settlement: true }
    });

    return NextResponse.json(hexCell);
  } catch (error) {
    console.error('Error updating hex cell:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/maps/cells - создать новую ячейку
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { hexMapId, q, r, s, hexTypeId = 'countryside' } = body;

    if (!hexMapId || q === undefined || r === undefined || s === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Проверяем доступ к карте
    const hexMap = await prisma.hexMap.findUnique({
      where: { id: hexMapId },
      include: { campaign: true }
    });

    if (!hexMap) {
      return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    }

    // Проверяем, что пользователь - мастер кампании
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: hexMap.campaignId,
        gmId: session.user.id
      }
    });

    if (!campaign) {
      return NextResponse.json({ error: 'Only GM can create hex cells' }, { status: 403 });
    }

    // Создаем ячейку
    const hexCell = await prisma.hexCell.create({
      data: {
        hexMapId,
        q,
        r,
        s,
        hexTypeId,
        isRevealed: false,
        notes: ''
      },
      include: {
        hexType: true,
        landmark: true,
        landmarkDetail: true,
        settlement: true
      }
    });

    return NextResponse.json(hexCell);
  } catch (error) {
    console.error('Error creating hex cell:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/maps/cells - удалить ячейку карты
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { hexMapId, q, r, s } = body;

    if (!hexMapId || q === undefined || r === undefined || s === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Проверяем карту и кампанию
    const hexMap = await prisma.hexMap.findUnique({
      where: { id: hexMapId },
      include: { campaign: true }
    });
    if (!hexMap) {
      return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    }

    // Только ГМ
    if (hexMap.campaign.gmId !== session.user.id) {
      return NextResponse.json({ error: 'Only GM can delete hex cells' }, { status: 403 });
    }

    // Удаляем
    await prisma.hexCell.delete({
      where: {
        hexMapId_q_r_s: { hexMapId, q, r, s }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting hex cell:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
