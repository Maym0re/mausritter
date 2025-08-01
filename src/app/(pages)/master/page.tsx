'use client';
import Link from 'next/link';
import { HexGridCanvas } from '../map/components/HexGridCanvas';

export default function MasterPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Навигационная панель мастера */}
      <div className="bg-red-900 text-white p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mausritter - Game Master</h1>
          <div className="flex gap-4">
            <Link
              href="/master"
              className="flex items-center gap-2 px-3 py-2 bg-red-800 rounded-md hover:bg-red-700 transition-colors"
            >
              🗺️ Campaign Map
            </Link>
            <Link
              href="/player"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              👥 Player View
            </Link>
          </div>
        </div>
      </div>

      {/* Основная карта */}
      <div className="flex-1">
        <HexGridCanvas mode="master" />
      </div>
    </div>
  );
}
