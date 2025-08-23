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
      customName
    } = body;

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

    // Проверяем права доступа
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: hexMap.campaignId,
        OR: [
          { gmId: session.user.id },
          { players: { some: { userId: session.user.id } } }
        ]
      }
    });

    if (!campaign) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Только мастер может редактировать содержимое ячеек
    const isGM = campaign.gmId === session.user.id;
    if (!isGM && (hexTypeId || landmarkId || landmarkDetailId || settlementId || notes !== undefined || customName !== undefined)) {
      return NextResponse.json({ error: 'Only GM can edit hex content' }, { status: 403 });
    }

    // Обновляем или создаем ячейку
    const hexCell = await prisma.hexCell.upsert({
      where: {
        hexMapId_q_r_s: {
          hexMapId,
          q,
          r,
          s
        }
      },
      update: {
        ...(hexTypeId && { hexTypeId }),
        ...(landmarkId !== undefined && { landmarkId }),
        ...(landmarkDetailId !== undefined && { landmarkDetailId }),
        ...(settlementId !== undefined && { settlementId }),
        ...(isRevealed !== undefined && { isRevealed }),
        ...(notes !== undefined && { notes }),
        ...(customName !== undefined && { customName })
      },
      create: {
        hexMapId,
        q,
        r,
        s,
        hexTypeId: hexTypeId || 'countryside',
        landmarkId,
        landmarkDetailId,
        settlementId,
        isRevealed: isRevealed ?? false,
        notes: notes || '',
        customName
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
