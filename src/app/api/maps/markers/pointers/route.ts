import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(_req: NextRequest) {
  try {
    const dir = path.join(process.cwd(), 'public', 'images', 'pointers');
    const files = await fs.readdir(dir);
    const list = files.filter(f => /\.(png|webp|jpg|jpeg|gif)$/i.test(f));
    return NextResponse.json(list);
  } catch (e) {
    console.error('List pointer images error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

