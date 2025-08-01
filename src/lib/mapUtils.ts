import { HexData, HEX_TYPES, COUNTRYSIDE_LANDMARKS, FOREST_LANDMARKS, LANDMARK_DETAILS } from '@/types/map';

// Функции для генерации случайного контента на основе SRD
export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollD20(): number {
  return Math.floor(Math.random() * 20) + 1;
}

export function rollD66(): number {
  const tens = rollD6();
  const ones = rollD6();
  return tens * 10 + ones;
}

export function getRandomHexType() {
  const roll = rollD6();
  if (roll <= 2) return HEX_TYPES.find(t => t.id === 'countryside')!;
  if (roll <= 4) return HEX_TYPES.find(t => t.id === 'forest')!;
  if (roll === 5) return HEX_TYPES.find(t => t.id === 'river')!;
  return HEX_TYPES.find(t => t.id === 'human_town')!;
}

export function getRandomLandmark(hexTypeId: string) {
  const landmarks = hexTypeId === 'countryside' ? COUNTRYSIDE_LANDMARKS :
                   hexTypeId === 'forest' ? FOREST_LANDMARKS : [];

  if (landmarks.length === 0) return undefined;

  const roll = rollD20();
  return landmarks[Math.min(roll - 1, landmarks.length - 1)];
}

export function getRandomLandmarkDetail() {
  const roll = rollD6();
  const detailRoll = rollD6();

  // Упрощенная версия таблицы деталей из SRD
  if (roll === 1) return LANDMARK_DETAILS[0]; // Mouse settlement
  if (roll === 2) return LANDMARK_DETAILS[detailRoll - 1];
  // ... можно расширить логику

  return LANDMARK_DETAILS[Math.floor(Math.random() * LANDMARK_DETAILS.length)];
}

export function generateSettlement() {
  const sizeRoll = Math.min(rollD6(), rollD6()); // 2d6, keep lowest
  const sizes = ['farm', 'crossroads', 'hamlet', 'village', 'town', 'city'] as const;

  const governanceRoll = rollD6() + sizeRoll;
  const governanceOptions = [
    'Guided by village elders',
    'Administered by a knight',
    'Organised by a guild committee',
    'Free settlement, governed by council',
    'House of noblemouse',
    'Seat of baronial power'
  ];

  return {
    id: `settlement_${Date.now()}`,
    name: generateSettlementName(),
    size: sizes[sizeRoll - 1],
    governance: governanceOptions[Math.min(governanceRoll - 2, governanceOptions.length - 1)],
    inhabitants: generateInhabitantTrait(),
    feature: generateSettlementFeature(),
    industry: generateIndustry(),
    event: generateCurrentEvent(),
    population: calculatePopulation(sizes[sizeRoll - 1])
  };
}

function generateSettlementName(): string {
  const starts = ['Oaks', 'Berry', 'Willow', 'Stump', 'Pine', 'Moon', 'Green', 'Black', 'Stone', 'Hill', 'Fig', 'Apple'];
  const ends = ['thorpe', 'ville', 'mill', 'dale', 'grove', 'town', 'vale', 'seed', 'ashe', 'bush', 'stitch', 'shine'];

  const start = starts[Math.floor(Math.random() * starts.length)];
  const end = ends[Math.floor(Math.random() * ends.length)];

  return `${start}${end}`;
}

function generateInhabitantTrait(): string {
  const traits = [
    'Shave elaborate patterns in their fur',
    'Intoxicated by strange plants',
    'Wary of doing business with outsiders',
    'Curious for news from afar',
    'Believe grooming their fur is bad luck',
    'Wear finely embroidered clothes'
  ];

  return traits[Math.floor(Math.random() * traits.length)];
}

function generateSettlementFeature(): string {
  const features = [
    'Maze of defensive, trap-filled tunnels',
    'Exceedingly comfortable, well-appointed inn',
    'Shrine carved of black wood',
    'Meditative mushroom garden',
    'Cow skull, repurposed as a guildhouse',
    'Mess of closely packed shanties'
  ];

  return features[Math.floor(Math.random() * features.length)];
}

function generateIndustry(): string {
  const industries = [
    'Farmers, tending to towering crops',
    'Woodcutters, with saws and harnesses',
    'Rough and scarred fishermice, with nets and rafts',
    'Dark and musty mushroom farm',
    'Grains drying on every flat surface',
    'Pungent cheese, cured for years'
  ];

  return industries[Math.floor(Math.random() * industries.length)];
}

function generateCurrentEvent(): string {
  const events = [
    'Disaster, everyone packing to leave',
    'Wedding, streets decked in flowers',
    'Preparing for grand seasonal feast',
    'An illness has struck',
    'Storehouse has been plundered by insects',
    'Market day, farmers flock to the settlement'
  ];

  return events[Math.floor(Math.random() * events.length)];
}

function calculatePopulation(size: string): number {
  switch (size) {
    case 'farm': return Math.floor(Math.random() * 3) + 1;
    case 'crossroads': return Math.floor(Math.random() * 3) + 3;
    case 'hamlet': return Math.floor(Math.random() * 100) + 50;
    case 'village': return Math.floor(Math.random() * 150) + 150;
    case 'town': return Math.floor(Math.random() * 700) + 300;
    case 'city': return Math.floor(Math.random() * 2000) + 1000;
    default: return 50;
  }
}

// Утилиты для работы с координатами гексов
export function hexKey(q: number, r: number): string {
  return `${q},${r}`;
}

export function parseHexKey(key: string): { q: number; r: number } {
  const [q, r] = key.split(',').map(Number);
  return { q, r };
}

export function getNeighborCoords(q: number, r: number): Array<{ q: number; r: number }> {
  return [
    { q: q + 1, r: r - 1 },
    { q: q + 1, r: r },
    { q: q, r: r + 1 },
    { q: q - 1, r: r + 1 },
    { q: q - 1, r: r },
    { q: q, r: r - 1 },
  ];
}
