import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// PUT /api/maps/markers/[id]  { x?, y?, z? }
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const id = params.id;
    const body = await req.json();
    const { x, y, z } = body || {};

    const marker = await prisma.mapMarker.findUnique({ include: { hexMap: { include: { campaign: true } } }, where: { id } });
    if (!marker) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (marker.hexMap.campaign.gmId !== session.user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const updated = await prisma.mapMarker.update({ where: { id }, data: {
      ...(typeof x === 'number' ? { x } : {}),
      ...(typeof y === 'number' ? { y } : {}),
      ...(typeof z === 'number' ? { z } : {}),
    }});
    return NextResponse.json(updated);
  } catch (e) {
    console.error('Update marker error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/maps/markers/[id]
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const id = params.id;
    const marker = await prisma.mapMarker.findUnique({ include: { hexMap: { include: { campaign: true } } }, where: { id } });
    if (!marker) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (marker.hexMap.campaign.gmId !== session.user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    await prisma.mapMarker.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Delete marker error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

