import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// POST /api/maps/markers  { hexMapId, image, x, y, z? }
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const { hexMapId, image, x, y, z = 0 } = body || {};
    if (!hexMapId || !image || typeof x !== 'number' || typeof y !== 'number') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    const map = await prisma.hexMap.findUnique({ where: { id: hexMapId }, include: { campaign: true, markers: true } });
    if (!map) return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    // Только ГМ может добавлять метки
    if (map.campaign.gmId !== session.user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    if (map.markers.length >= 20) return NextResponse.json({ error: 'Marker limit reached' }, { status: 409 });
    // (лимит 20 меток реализован здесь; для обновления/удаления см. файл [id]/route.ts)

    const created = await prisma.mapMarker.create({ data: { hexMapId, image, x, y, z } });
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error('Create marker error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
