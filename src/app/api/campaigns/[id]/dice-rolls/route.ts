import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/campaigns/:id/dice-rolls  -> last 50 logs with entries
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;

    const campaign = await prisma.campaign.findUnique({
      where: { id },
      select: { id: true, gmId: true, players: { select: { userId: true } } }
    });
    if (!campaign) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const isParticipant = campaign.gmId === session.user.id || campaign.players.some(p => p.userId === session.user.id);
    if (!isParticipant) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const logs = await prisma.diceRollLog.findMany({
      where: { campaignId: id },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        user: { select: { id: true, name: true, email: true } },
        entries: { orderBy: { order: 'asc' } }
      }
    });
    return NextResponse.json(logs);
  } catch (e) {
    console.error('Dice log GET error', e);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// POST /api/campaigns/:id/dice-rolls { notation, total, rolls:[{type,value,sides?}] }
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    const body = await req.json();
    const { notation, total, rolls } = body || {};
    if (!notation || typeof total !== 'number' || !Array.isArray(rolls)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const campaign = await prisma.campaign.findUnique({
      where: { id },
      select: { id: true, gmId: true, players: { select: { userId: true } } }
    });
    if (!campaign) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const isParticipant = campaign.gmId === session.user.id || campaign.players.some(p => p.userId === session.user.id);
    if (!isParticipant) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const created = await prisma.$transaction(async (tx) => {
      const log = await tx.diceRollLog.create({
        data: {
          campaignId: id,
            userId: session.user.id,
            notation: String(notation).slice(0, 100),
            total: Math.trunc(total)
        },
        include: { user: { select: { id: true, name: true, email: true } }, entries: true }
      });
      if (rolls.length) {
        const data = rolls.slice(0, 100).map((r, idx: number) => {
          const t = String(r.type || '').slice(0, 16) || (r.sides ? `d${r.sides}` : 'd?');
          let sides: number | null = null;
          if (typeof r.sides === 'number') sides = r.sides;
          else if (/^d\d+$/i.test(t)) sides = parseInt(t.slice(1), 10);
          return {
            logId: log.id,
            order: idx,
            type: t,
            value: Number.isFinite(r.value) ? Math.trunc(r.value) : 0,
            sides: sides ?? null
          };
        });
        if (data.length) await tx.diceRollEntry.createMany({ data });
      }
      return tx.diceRollLog.findUnique({
        where: { id: log.id },
        include: { user: { select: { id: true, name: true, email: true } }, entries: { orderBy: { order: 'asc' } } }
      });
    });

    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error('Dice log POST error', e);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
