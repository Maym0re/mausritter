import { GameTime, WeatherEntry } from "@/types/time";

export interface Character {
  id: string;
  name: string;
  notes?: string;

  // Основные атрибуты
  str: number;
  dex: number;
  wil: number;

  // Здоровье и ресурсы
  hp: number;
  maxHp: number;
  pips: number;

  // Уровень и опыт
  level: number;
  xp: number;
  grit: number;

  // Предыстория и внешность
  background: Background;
  birthsign: Birthsign;
  coat: CoatDetails;
  physicalDetail: string;

  // Инвентарь как JSON
  inventory: InventorySlots;
  conditions: Condition[];

  // Игровое состояние
  isActive: boolean;

  // Связи
  playerId: string;
  player: User;
  campaignId: string;

  // Временные метки
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  gmId: string;
  currentTurn: number;
  currentTime: GameTime;
  season: string;
  weather?: WeatherEntry;
  createdAt: Date;
  updatedAt: Date;
  todaysEvent?: string;

  // Связанные данные
  gm?: User;
  players: CampaignPlayer[];
  characters?: Character[];
  hexMap?: any;
  _count?: {
    players: number;
    characters: number;
  };
}

export interface User {
  id: string;
  name?: string;
  email?: string;
}

export interface CampaignPlayer {
  id: string;
  campaignId: string;
  userId: string;
  joinedAt: Date;

  // Связанные данные
  user?: User;
  campaign?: Campaign;
}

// Дополнительные типы для UI
export interface Background {
  name: string;
  itemA: string;
  itemB: string;
}

export interface Birthsign {
  sign: string;
  disposition: string;
}

export interface CoatDetails {
  color: string;
  pattern: string;
}

export interface InventorySlots {
  paws: (InventoryItem | null)[];     // 2 слота
  body: (InventoryItem | null)[];     // 2 слота
  pack: (InventoryItem | null)[];     // 6 слотов
}

export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  size: number;
  usage: number;
  maxUsage: number;
  description?: string;
  value?: number;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  clearRequirement?: string;
  effects?: string[]
}

// Таблицы генерации из SRD
export const BACKGROUND_TABLE: { hp: number; pips: number; background: string; itemA: string; itemB: string }[] = [
  { hp: 1, pips: 1, background: "Test subject", itemA: "Spell: Magic missile", itemB: "Lead coat (Heavy armour)" },
  { hp: 1, pips: 2, background: "Kitchen forager", itemA: "Shield & jerkin (Light armour)", itemB: "Cookpots" },
  { hp: 1, pips: 3, background: "Cage dweller", itemA: "Spell: Be understood", itemB: "Bottle of milk" },
  { hp: 1, pips: 4, background: "Hedge witch", itemA: "Spell: Heal", itemB: "Incense stick" },
  { hp: 1, pips: 5, background: "Leatherworker", itemA: "Shield & jerkin (Light armour)", itemB: "Shears" },
  { hp: 1, pips: 6, background: "Street tough", itemA: "Dagger (Light, d6)", itemB: "Flask of coffee" },
  { hp: 2, pips: 1, background: "Mendicant priest", itemA: "Spell: Restore", itemB: "Holy symbol" },
  { hp: 2, pips: 2, background: "Beetleherd", itemA: "Hireling: Loyal beetle", itemB: "Pole, 6\"" },
  { hp: 2, pips: 3, background: "Ale brewer", itemA: "Hireling: Drunken torchbearer", itemB: "Small barrel of ale" },
  { hp: 2, pips: 4, background: "Fishermouse", itemA: "Net", itemB: "Needle (Light, d6)" },
  { hp: 2, pips: 5, background: "Blacksmith", itemA: "Hammer (Medium, d6/d8)", itemB: "Metal file" },
  { hp: 2, pips: 6, background: "Wireworker", itemA: "Wire, spool", itemB: "Electric lantern" },
  { hp: 3, pips: 1, background: "Woodcutter", itemA: "Axe (Medium, d6/d8)", itemB: "Twine, roll" },
  { hp: 3, pips: 2, background: "Bat cultist", itemA: "Spell: Darkness", itemB: "Bag of bat teeth" },
  { hp: 3, pips: 3, background: "Tin miner", itemA: "Pickaxe (Medium, d6/d8)", itemB: "Lantern" },
  { hp: 3, pips: 4, background: "Trash collector", itemA: "Trashhook (Heavy, d10)", itemB: "Mirror" },
  { hp: 3, pips: 5, background: "Wall rover", itemA: "Fishhook", itemB: "Thread, spool" },
  { hp: 3, pips: 6, background: "Merchant", itemA: "Hireling: Pack rat", itemB: "20p IOU from a noblemouse" },
  { hp: 4, pips: 1, background: "Raft crew", itemA: "Hammer (Medium, d6/d8)", itemB: "Wooden spikes" },
  { hp: 4, pips: 2, background: "Worm wrangler", itemA: "Pole, 6\"", itemB: "Soap" },
  { hp: 4, pips: 3, background: "Sparrow rider", itemA: "Fishhook", itemB: "Goggles" },
  { hp: 4, pips: 4, background: "Sewer guide", itemA: "Metal file", itemB: "Thread, spool" },
  { hp: 4, pips: 5, background: "Prison guard", itemA: "Chain, 6\"", itemB: "Spear (Heavy, d10)" },
  { hp: 4, pips: 6, background: "Fungus farmer", itemA: "Dried mushroom (as rations)", itemB: "Spore mask" },
  { hp: 5, pips: 1, background: "Dam builder", itemA: "Shovel", itemB: "Wooden spikes" },
  { hp: 5, pips: 2, background: "Cartographer", itemA: "Quill & ink", itemB: "Compass" },
  { hp: 5, pips: 3, background: "Trap thief", itemA: "Block of cheese", itemB: "Glue" },
  { hp: 5, pips: 4, background: "Vagabond", itemA: "Tent", itemB: "Treasure map, dubious" },
  { hp: 5, pips: 5, background: "Grain farmer", itemA: "Spear (Heavy, d10)", itemB: "Whistle" },
  { hp: 5, pips: 6, background: "Message runner", itemA: "Bedroll", itemB: "Documents, sealed" },
  { hp: 6, pips: 1, background: "Troubadour", itemA: "Musical instrument", itemB: "Disguise kit" },
  { hp: 6, pips: 2, background: "Gambler", itemA: "Set of loaded dice", itemB: "Mirror" },
  { hp: 6, pips: 3, background: "Sap tapper", itemA: "Bucket", itemB: "Wooden spikes" },
  { hp: 6, pips: 4, background: "Bee keeper", itemA: "Jar of honey", itemB: "Net" },
  { hp: 6, pips: 5, background: "Librarian", itemA: "Scrap of obscure book", itemB: "Quill & ink" },
  { hp: 6, pips: 6, background: "Pauper noblemouse", itemA: "Felt hat", itemB: "Perfume" }
];

export const BIRTHSIGNS: { sign: string; disposition: string }[] = [
  { sign: "Star", disposition: "Brave / Reckless" },
  { sign: "Wheel", disposition: "Industrious / Unimaginative" },
  { sign: "Acorn", disposition: "Inquisitive / Stubborn" },
  { sign: "Storm", disposition: "Generous / Wrathful" },
  { sign: "Moon", disposition: "Wise / Mysterious" },
  { sign: "Mother", disposition: "Nurturing / Worrying" }
];

export const COAT_COLORS = ["Chocolate", "Black", "White", "Tan", "Grey", "Blue"];
export const COAT_PATTERNS = ["Solid", "Brindle", "Patchy", "Banded", "Marbled", "Flecked"];

export const PHYSICAL_DETAILS = [
  "Scarred body", "Corpulent body", "Skeletal body", "Willowy body", "Tiny body", "Massive body",
  "War paint", "Foreign clothes", "Elegant clothes", "Patched clothes", "Fashionable clothes", "Unwashed clothes",
  "Missing ear", "Lumpy face", "Beautiful face", "Round face", "Delicate face", "Elongated face",
  "Groomed fur", "Dreadlocks", "Dyed fur", "Shaved fur", "Frizzy fur", "Silky fur",
  "Night black eyes", "Eye patch", "Blood red eyes", "Wise eyes", "Sharp eyes", "Luminous eyes",
  "Cropped tail", "Whip-like tail", "Tufted tail", "Stubby tail", "Prehensile tail", "Curly tail"
];

// Условия из SRD
export const CONDITIONS: Condition[] = [
  {
    id: 'injured',
    name: 'Injured',
    description: 'Incapacitated until tended to by an ally and take a short rest',
    clearRequirement: 'Tended to by ally + short rest'
  },
  {
    id: 'exhausted',
    name: 'Exhausted',
    description: 'Cannot run, makes all saves with Disadvantage',
    clearRequirement: 'Long rest',
    effects: ['No running', 'Disadvantage on all saves']
  },
  {
    id: 'frightened',
    name: 'Frightened',
    description: 'Must make WIL save to approach the source of fear',
    clearRequirement: 'Short rest away from source',
    effects: ['WIL save to approach fear source']
  },
  {
    id: 'hungry',
    name: 'Hungry',
    description: 'Has not eaten for a day',
    clearRequirement: 'Eat a meal',
    effects: ['Disadvantage on STR saves']
  },
  {
    id: 'drained',
    name: 'Drained',
    description: 'Magical energy depleted',
    clearRequirement: 'Long rest',
    effects: ['Cannot cast spells']
  }
];

// Базовое снаряжение
export const BASIC_EQUIPMENT: InventoryItem[] = [
  {
    id: 'torches',
    name: 'Torches',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Provides light for 6 Turns per usage dot'
  },
  {
    id: 'rations',
    name: 'Rations',
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Food for the road. Heals all HP with Watch rest'
  }
];

// Оружие
export const WEAPONS: InventoryItem[] = [
  {
    id: 'dagger',
    name: 'Dagger',
    type: 'weapon',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Light weapon, d6 damage',
    value: 10
  },
  {
    id: 'sword',
    name: 'Sword',
    type: 'weapon',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description: 'Medium weapon, d6/d8 damage',
    value: 20
  },
  {
    id: 'spear',
    name: 'Spear',
    type: 'weapon',
    size: 2,
    usage: 0,
    maxUsage: 3,
    description: 'Heavy weapon, d10 damage',
    value: 40
  }
];
