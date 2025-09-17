'use client';
import React, { useState } from 'react';
import { HexGridCanvas } from '@/app/(pages)/campaign/components/HexGridCanvas';
import { HEX_TYPES } from '@/types/map';

// Helper to fetch hex type object
function hx(id: string) { return HEX_TYPES.find(h => h.id === id)!; }

// Helper to create a pseudo-settlement (for demo only; governance etc are flavor placeholders)
function makeSettlement(name: string, size: 'farm'|'crossroads'|'hamlet'|'village'|'town'|'city', population: number, feature: string) {
  return {
    id: `settlement_${name.replace(/\s+/g,'_').toLowerCase()}`,
    name,
    size,
    governance: 'Local council',
    inhabitants: 'Industrious mice',
    feature,
    industry: 'Mixed trades',
    event: 'Calm season',
    population
  };
}

// Axial layout: ring0 center (#15), ring1 (#1-#6), ring2 (#7-#14 & #16-#19)
// Coordinates chosen so center (0,0) is #15 (Stumps)
const initialCells = [
  // Ring1
  { q: 1,  r: 0,  s: -1,  hexType: hx('human_town'), customName: 'Oak Grove', notes: 'Town (pop 350). Three ancient oaks linked by bridges. Embroidered clothes; pigeon roosts.', isRevealed: true, settlement: makeSettlement('Oak Grove','town',350,'Bridged oak canopies') }, // 1
  { q: 1,  r: -1, s: 0,   hexType: hx('countryside'), customName: 'Kingdom of Ants', notes: 'Three ant kingdoms hire mercenaries & killers.', isRevealed: true }, // 2
  { q: 0,  r: -1, s: 1,   hexType: hx('countryside'), customName: 'Clear-Cut', notes: 'Felled trees & sawdust. Machinery screeches from nearby woods (day & night).', isRevealed: true }, // 3
  { q: -1, r: 0,  s: 1,   hexType: hx('forest'), customName: 'Cave of Gormenghast', notes: 'Den of an ancient wicked wolf; wise mice avoid.', isRevealed: true }, // 4
  { q: -1, r: 1,  s: 0,   hexType: hx('forest'), customName: 'Ghostly Beech', notes: 'Grey bark, translucent leaves; hollow holds a beetle graveyard.', isRevealed: true }, // 5
  { q: 0,  r: 1,  s: -1,  hexType: hx('countryside'), customName: 'Poppy Hollow', notes: 'Mouse inn. Cellar: secret River Rats smuggler hideout.', isRevealed: true, settlement: makeSettlement('Poppy Hollow','hamlet',30,'Well-known roadside inn') }, // 6
  // Ring2
  { q: 2,  r: 0,  s: -2, hexType: hx('river'), customName: 'Fishing Spot', notes: '3-in-6 chance humans present. Stone-hop river crossing.', isRevealed: true }, // 7
  { q: 2,  r: -1, s: -1, hexType: hx('human_town'), customName: 'Gate of Balthazar', notes: 'Entrance to the Barony; few who cross return.', isRevealed: true }, // 8
  { q: 2,  r: -2, s: 0,  hexType: hx('human_town'), customName: 'Woodshed', notes: 'Deathrats gang hideout; kidnapping Stumps mice for Balthazar.', isRevealed: true }, // 9
  { q: 1,  r: -2, s: 1,  hexType: hx('countryside'), customName: 'Abandoned Hut', notes: 'Cursed sunflower lures bees & cultists (see Honey in the Rafters).', isRevealed: true }, // 10
  { q: 0,  r: -2, s: 2,  hexType: hx('river'), customName: 'Waterfall Cave', notes: 'Hidden entrance to the Fairy Realm behind falls.', isRevealed: true }, // 11
  { q: -1, r: -1, s: 2,  hexType: hx('countryside'), customName: 'Black Rock', notes: 'Abandoned; former mice now insectoid hybrids. Black monolith remains.', isRevealed: true }, // 12
  { q: -2, r: 0,  s: 2,  hexType: hx('river'), customName: 'River Haven', notes: 'Hamlet (pop 75) inside a log bridging river; mushroom farm; hidden riverboat dock below.', isRevealed: true, settlement: makeSettlement('River Haven','hamlet',75,'Log-bridge settlement') }, // 13
  { q: -2, r: 1,  s: 1,  hexType: hx('countryside'), customName: 'Magnolia Tower', notes: 'Mouse-witch tower in lightning-split beech. Needs a cat fang to finish mighty spell.', isRevealed: true }, // 14
  { q: -2, r: 2,  s: 0,  hexType: hx('human_town'), customName: 'Menhir Motte', notes: 'Castle within a huge boulder; ruled by Larkspur, provincial overlord.', isRevealed: true }, // 16
  { q: -1, r: 2,  s: -1, hexType: hx('forest'), customName: 'Mushroom Grotto', notes: 'Damp fungal caverns; rival adventurers seek an ancient queen’s tomb.', isRevealed: true }, // 17
  { q: 0,  r: 2,  s: -2, hexType: hx('human_town'), customName: 'The Gate', notes: 'Leads to the Great City. 2-in-6 chance of encountering a human.', isRevealed: true }, // 18
  { q: 1,  r: 1,  s: -2, hexType: hx('river'), customName: 'Hideout under the Bridge', notes: 'River Rats smuggler refuge; will ferry anything for a price.', isRevealed: true }, // 19
  // Center
  { q: 0,  r: 0,  s: 0,  hexType: hx('countryside'), customName: 'Stumps', notes: 'Hamlet (pop 50). Famous cheese guarded by a large snake. All mice kidnapped by Deathrats. Adventure begins here.', isRevealed: true, settlement: makeSettlement('Stumps','hamlet',50,'Renowned cheese cellars') }, // 15 center
];

export default function DemoCampaignPage() {
  const [isAddHexMode, setIsAddHexMode] = useState(false);
  const [showMarkersPanel, setShowMarkersPanel] = useState(false);
  const [showInfo, setShowInfo] = useState(true); // info banner visibility

  return (
    <div className="h-[calc(100vh-56px)] w-screen overflow-hidden relative">
      {showInfo && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[1200] bg-stone-900/80 border border-stone-700 rounded px-4 py-2 pr-8 text-xs text-stone-200 max-w-[90%] leading-relaxed">
          <button
            aria-label="Close demo notice"
            onClick={()=>setShowInfo(false)}
            className="absolute top-1 right-1 text-stone-400 hover:text-white text-sm px-1"
          >✕</button>
          <p className="font-semibold mb-1">Demo campaign</p>
          <p>This is a demo showcase map. You can add hexes, markers, drag & drop or paste images. Reload the page to reset.</p>
        </div>
      )}
      <HexGridCanvas
        mode="master"
        campaignId="demo"
        isAddHexMode={isAddHexMode}
        onAddHexModeChange={setIsAddHexMode}
        markersPanelOpen={showMarkersPanel}
        onMarkersPanelOpenChange={setShowMarkersPanel}
        demo
        initialDemoMap={{ id: 'demo', cells: initialCells, size: 7, centerX: 0, centerY: 0, images: [], markers: [] }}
      />
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-[1300] border border-stone-700">
        <button onClick={()=>setIsAddHexMode(m=>!m)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isAddHexMode? 'bg-amber-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{isAddHexMode? 'Finish' : 'Add hexes'}</button>
        <button onClick={()=>setShowMarkersPanel(v=>!v)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showMarkersPanel? 'bg-emerald-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{showMarkersPanel? 'Hide markers':'Markers'}</button>
        <div className="text-[10px] text-stone-400">No data is saved</div>
      </div>
    </div>
  );
}
