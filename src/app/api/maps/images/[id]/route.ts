import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// PUT /api/maps/images/:id  body: { x?, y?, width?, height? }
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = context.params;
    const body = await req.json().catch(() => ({}));
    const { x, y, width, height } = body || {};

    const existing = await prisma.mapImage.findUnique({
      where: { id },
      include: { hexMap: { include: { campaign: true } } }
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (existing.hexMap.campaign.gmId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const data: Record<string, number> = {};
    if (typeof x === 'number') data.x = x;
    if (typeof y === 'number') data.y = y;
    if (typeof width === 'number') data.width = width;
    if (typeof height === 'number') data.height = height;
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'No valid fields provided' }, { status: 400 });
    }

    const updated = await prisma.mapImage.update({ where: { id }, data });
    return NextResponse.json(updated);
  } catch (e) {
    console.error('Update map image error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/maps/images/:id
export async function DELETE(_req: NextRequest, context: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = context.params;
    const existing = await prisma.mapImage.findUnique({
      where: { id },
      include: { hexMap: { include: { campaign: true } } }
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (existing.hexMap.campaign.gmId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    await prisma.mapImage.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Delete map image error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
