import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/maps?campaignId=xxx - получить карту кампании
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const campaignId = searchParams.get('campaignId');

    if (!campaignId) {
      return NextResponse.json({ error: 'Campaign ID required' }, { status: 400 });
    }

    // Проверяем доступ к кампании
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        OR: [
          { gmId: session.user.id },
          { players: { some: { userId: session.user.id } } }
        ]
      }
    });

    if (!campaign) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    // Получаем карту с ячейками
    const hexMap = await prisma.hexMap.findUnique({
      where: { campaignId },
      include: {
        cells: {
          include: {
            hexType: true,
            landmark: true,
            landmarkDetail: true,
            settlement: true
          }
        },
        images: true
      }
    });

    // Если карты нет - возвращаем пустую структуру
    if (!hexMap) {
      return NextResponse.json({
        id: null,
        campaignId,
        size: 5,
        centerX: 2,
        centerY: 2,
        cells: [],
        images: []
      });
    }

    return NextResponse.json(hexMap);
  } catch (error) {
    console.error('Error fetching map:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/maps - создать новую карту для кампании
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { campaignId, size = 5 } = body;

    if (!campaignId) {
      return NextResponse.json({ error: 'Campaign ID required' }, { status: 400 });
    }

    // Проверяем, что пользователь - мастер кампании
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        gmId: session.user.id
      }
    });

    if (!campaign) {
      return NextResponse.json({ error: 'Only GM can create maps' }, { status: 403 });
    }

    // Проверяем, не существует ли уже карта для этой кампании
    const existingMap = await prisma.hexMap.findUnique({
      where: { campaignId }
    });

    if (existingMap) {
      return NextResponse.json({ error: 'Map already exists for this campaign' }, { status: 400 });
    }

    // Создаем карту
    const hexMap = await prisma.hexMap.create({
      data: {
        campaignId,
        size,
        centerX: Math.floor(size / 2),
        centerY: Math.floor(size / 2)
      }
    });

    return NextResponse.json(hexMap);
  } catch (error) {
    console.error('Error creating map:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
