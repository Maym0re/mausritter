'use client';
import React, { useState } from 'react';
import { HexGridCanvas } from '@/app/(pages)/campaign/components/HexGridCanvas';
import { HEX_TYPES, COUNTRYSIDE_LANDMARKS, FOREST_LANDMARKS, RIVER_LANDMARKS } from '@/types/map';

// Prepare a small starter "base" map (example, not full SRD canon; expand later if needed)
// Axial coordinates q,r (s = -(q+r)) around center 0,0
function buildCell(q: number, r: number, hexTypeId: string, landmarkId?: string) {
  const hexType = HEX_TYPES.find(h => h.id === hexTypeId)!;
  const allLandmarks = [...COUNTRYSIDE_LANDMARKS, ...FOREST_LANDMARKS, ...RIVER_LANDMARKS];
  const landmark = landmarkId ? allLandmarks.find(l => l.id === landmarkId) : undefined;
  return {
    q,
    r,
    s: -(q + r),
    hexType,
    landmark,
    isRevealed: true,
    notes: '',
  } as const;
}

const initialCells = [
  // Center
  buildCell(0, 0, 'countryside', 'old_farmhouse'),
  // Surrounding examples
  buildCell(1, 0, 'countryside', 'field_wheat'),
  buildCell(0, 1, 'forest', 'bright_clearing'),
  buildCell(-1, 1, 'forest', 'ancient_oak_face'),
  buildCell(-1, 0, 'river', 'stone_bridge'),
  buildCell(0, -1, 'countryside', 'steep_hill'),
  buildCell(1, -1, 'forest', 'overgrown_ruins'),
];

export default function DemoCampaignPage() {
  const [isAddHexMode, setIsAddHexMode] = useState(false);
  const [showMarkersPanel, setShowMarkersPanel] = useState(false);

  return (
    <div className="h-[calc(100vh-56px)] w-screen overflow-hidden relative">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[1200] bg-stone-900/80 border border-stone-700 rounded px-4 py-2 text-xs text-stone-200 max-w-[90%] leading-relaxed">
        <p className="font-semibold mb-1">Demo campaign</p>
        <p>This is a demo showcase map. You can add hexes, markers, drag & drop or paste images (they are compressed and NOT persisted). Reload the page to reset.</p>
      </div>
      <HexGridCanvas
        mode="master"
        campaignId="demo"
        isAddHexMode={isAddHexMode}
        onAddHexModeChange={setIsAddHexMode}
        markersPanelOpen={showMarkersPanel}
        onMarkersPanelOpenChange={setShowMarkersPanel}
        demo
        initialDemoMap={{ id: 'demo', cells: initialCells as any, size: 5, centerX: 0, centerY: 0, images: [], markers: [] }}
      />
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-[1300] border border-stone-700">
        <button onClick={()=>setIsAddHexMode(m=>!m)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isAddHexMode? 'bg-amber-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{isAddHexMode? 'Finish' : 'Add hexes'}</button>
        <button onClick={()=>setShowMarkersPanel(v=>!v)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showMarkersPanel? 'bg-emerald-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{showMarkersPanel? 'Hide markers':'Markers'}</button>
        <div className="text-[10px] text-stone-400">No data is saved</div>
      </div>
    </div>
  );
}
