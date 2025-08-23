import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/maps/types - получить все типы гексов
export async function GET() {
  try {
    const hexTypes = await prisma.hexType.findMany({
      orderBy: { name: 'asc' }
    });

    return NextResponse.json(hexTypes);
  } catch (error) {
    console.error('Error fetching hex types:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
