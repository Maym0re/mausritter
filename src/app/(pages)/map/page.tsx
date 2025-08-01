'use client';
import { HexGridCanvas } from './components/HexGridCanvas';

export default function MapPage() {
  return (
    <div className="h-screen">
      <HexGridCanvas mode="master" />
    </div>
  );
}