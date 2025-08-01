'use client';

import { HexGridCanvas } from './components/HexGridCanvas';

export default function MapPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <HexGridCanvas mode="master" />
    </div>
  );
}