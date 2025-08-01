'use client';
import { HexGridCanvas } from '../map/components/HexGridCanvas';

export default function PlayerPage() {
  return (
    <div className="h-screen">
      <HexGridCanvas mode="player" />
    </div>
  );
}