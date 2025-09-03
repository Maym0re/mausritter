import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// POST /api/maps/images  { hexMapId, data, x, y, width, height }
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const { hexMapId, data, x, y, width, height } = body || {};
    if (!hexMapId || !data || typeof x !== 'number' || typeof y !== 'number' || typeof width !== 'number' || typeof height !== 'number') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    const map = await prisma.hexMap.findUnique({ where: { id: hexMapId }, include: { campaign: true } });
    if (!map) return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    if (map.campaign.gmId !== session.user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    if (data.length > 2_000_000) { // ~2MB base64 string length safeguard
      return NextResponse.json({ error: 'Image too large' }, { status: 413 });
    }
    const img = await prisma.mapImage.create({ data: { hexMapId, data, x, y, width, height } });
    return NextResponse.json(img, { status: 201 });
  } catch (e) {
    console.error('Create image error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

