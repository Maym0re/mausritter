import { z } from 'zod';
import { CharacterModelSchema } from '@/generated/zod/schemas/variants/pure/Character.pure';
import { BackgroundModelSchema } from '@/generated/zod/schemas/variants/pure/Background.pure';
import { BirthsignModelSchema } from '@/generated/zod/schemas/variants/pure/Birthsign.pure';

// Base models from Zod (relation placeholders replaced by local interfaces)
export type CharacterBase = z.infer<typeof CharacterModelSchema>;
export type BackgroundBase = z.infer<typeof BackgroundModelSchema>;
export type BirthsignBase = z.infer<typeof BirthsignModelSchema>;

export interface ConditionLite {
  id: string;
  name: string;
  description: string;
  clearRequirement: string;
  effects: string[];
}

export interface CoatLite {
  id: string;
  color: string;
  pattern: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InventoryItemLite {
  id?: string;
  name: string;
  type: 'equipment' | 'weapon' | 'armor' | 'spell' | string;
  size: number;
  usage: number;
  maxUsage: number;
  description: string;
  value: number;
  slotType: 'PAWS' | 'BODY' | 'PACK';
  slotIndex: number;
  characterId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PlayerLite {
  id: string;
  userId: string;
  name?: string | null;
}

export interface GameTimeLite {
  rounds: number;
  turns: number;
  watches: number;
  days: number;
}

export interface WeatherEntryLite {
  id: string;
  season: string;
  roll: number;
  weather: string;
  isPoorCondition: boolean;
}

export interface CampaignLite {
  id: string;
  name?: string;
  players?: PlayerLite[];
  gameTime?: GameTimeLite | null;
  weatherEntry?: WeatherEntryLite | null;
  gmId?: string;
}

export interface BackgroundLite {
  name: string;
  itemA: string;
  itemB: string;
}

export interface BirthsignLite {
  sign: string;
  disposition: string;
}

export type BackgroundInitial = BackgroundLite & { hp: number; pips: number };

export interface FullCharacter {
  id: string;
  name: string;
  notes?: string | null;
  playerId?: string;
  player?: PlayerLite | null;
  campaignId?: string;
  campaign?: CampaignLite | null;
  str: number;
  dex: number;
  wil: number;
  hp: number;
  maxHp: number;
  backgroundId?: string;
  birthsignId?: string;
  coatId?: string;
  background: BackgroundBase | BackgroundLite & { id: string; createdAt: Date; updatedAt: Date };
  birthsign: BirthsignBase | BirthsignLite & { id: string; createdAt: Date; updatedAt: Date };
  coat: CoatLite;
  physicalDetail?: string | null;
  level: number;
  xp: number;
  grit: number;
  pips: number;
  inventory: InventoryItemLite[];
  conditions: ConditionLite[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FullCampaign {
  id: string;
  name: string;
  description?: string | null;
  gm?: { id: string; name?: string | null; email?: string | null } | null;
  players?: { user: { id: string; name?: string | null; email?: string | null } }[];
  characters?: { id: string; name: string; isActive: boolean }[];
  _count?: { players: number; characters: number };
  season?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

// Constants
export const BACKGROUND_TABLE: BackgroundInitial[] = [
	{hp: 1, pips: 1, name: "Test subject", itemA: "Spell: Magic missile", itemB: "Lead coat (Heavy armour)"},
	{hp: 1, pips: 2, name: "Kitchen forager", itemA: "Shield & jerkin (Light armour)", itemB: "Cookpots"},
	{hp: 1, pips: 3, name: "Cage dweller", itemA: "Spell: Be understood", itemB: "Bottle of milk"},
	{hp: 1, pips: 4, name: "Hedge witch", itemA: "Spell: Heal", itemB: "Incense stick"},
	{hp: 1, pips: 5, name: "Leatherworker", itemA: "Shield & jerkin (Light armour)", itemB: "Shears"},
	{hp: 1, pips: 6, name: "Street tough", itemA: "Dagger (Light, d6)", itemB: "Flask of coffee"},
	{hp: 2, pips: 1, name: "Mendicant priest", itemA: "Spell: Restore", itemB: "Holy symbol"},
	{hp: 2, pips: 2, name: "Beetleherd", itemA: "Hireling: Loyal beetle", itemB: "Pole, 6\""},
	{hp: 2, pips: 3, name: "Ale brewer", itemA: "Hireling: Drunken torchbearer", itemB: "Small barrel of ale"},
	{hp: 2, pips: 4, name: "Fishermouse", itemA: "Net", itemB: "Needle (Light, d6)"},
	{hp: 2, pips: 5, name: "Blacksmith", itemA: "Hammer (Medium, d6/d8)", itemB: "Metal file"},
	{hp: 2, pips: 6, name: "Wireworker", itemA: "Wire, spool", itemB: "Electric lantern"},
	{hp: 3, pips: 1, name: "Woodcutter", itemA: "Axe (Medium, d6/d8)", itemB: "Twine, roll"},
	{hp: 3, pips: 2, name: "Bat cultist", itemA: "Spell: Darkness", itemB: "Bag of bat teeth"},
	{hp: 3, pips: 3, name: "Tin miner", itemA: "Pickaxe (Medium, d6/d8)", itemB: "Lantern"},
	{hp: 3, pips: 4, name: "Trash collector", itemA: "Trashhook (Heavy, d10)", itemB: "Mirror"},
	{hp: 3, pips: 5, name: "Wall rover", itemA: "Fishhook", itemB: "Thread, spool"},
	{hp: 3, pips: 6, name: "Merchant", itemA: "Hireling: Pack rat", itemB: "20p IOU from a noblemouse"},
	{hp: 4, pips: 1, name: "Raft crew", itemA: "Hammer (Medium, d6/d8)", itemB: "Wooden spikes"},
	{hp: 4, pips: 2, name: "Worm wrangler", itemA: "Pole, 6\"", itemB: "Soap"},
	{hp: 4, pips: 3, name: "Sparrow rider", itemA: "Fishhook", itemB: "Goggles"},
	{hp: 4, pips: 4, name: "Sewer guide", itemA: "Metal file", itemB: "Thread, spool"},
	{hp: 4, pips: 5, name: "Prison guard", itemA: "Chain, 6\"", itemB: "Spear (Heavy, d10)"},
	{hp: 4, pips: 6, name: "Fungus farmer", itemA: "Dried mushroom (as rations)", itemB: "Spore mask"},
	{hp: 5, pips: 1, name: "Dam builder", itemA: "Shovel", itemB: "Wooden spikes"},
	{hp: 5, pips: 2, name: "Cartographer", itemA: "Quill & ink", itemB: "Compass"},
	{hp: 5, pips: 3, name: "Trap thief", itemA: "Block of cheese", itemB: "Glue"},
	{hp: 5, pips: 4, name: "Vagabond", itemA: "Tent", itemB: "Treasure map, dubious"},
	{hp: 5, pips: 5, name: "Grain farmer", itemA: "Spear (Heavy, d10)", itemB: "Whistle"},
	{hp: 5, pips: 6, name: "Message runner", itemA: "Bedroll", itemB: "Documents, sealed"},
	{hp: 6, pips: 1, name: "Troubadour", itemA: "Musical instrument", itemB: "Disguise kit"},
	{hp: 6, pips: 2, name: "Gambler", itemA: "Set of loaded dice", itemB: "Mirror"},
	{hp: 6, pips: 3, name: "Sap tapper", itemA: "Bucket", itemB: "Wooden spikes"},
	{hp: 6, pips: 4, name: "Bee keeper", itemA: "Jar of honey", itemB: "Net"},
	{hp: 6, pips: 5, name: "Librarian", itemA: "Scrap of obscure book", itemB: "Quill & ink"},
	{hp: 6, pips: 6, name: "Pauper noblemouse", itemA: "Felt hat", itemB: "Perfume"}
];

export const BIRTHSIGNS: BirthsignLite[] = [
	{sign: "Star", disposition: "Brave / Reckless"},
	{sign: "Wheel", disposition: "Industrious / Unimaginative"},
	{sign: "Acorn", disposition: "Inquisitive / Stubborn"},
	{sign: "Storm", disposition: "Generous / Wrathful"},
	{sign: "Moon", disposition: "Wise / Mysterious"},
	{sign: "Mother", disposition: "Nurturing / Worrying"}
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

export const CONDITIONS: ConditionLite[] = [
	{
		id: 'injured',
		name: 'Injured',
		description: 'Incapacitated until tended to by an ally and take a short rest',
		clearRequirement: 'Tended to by ally + short rest',
		effects: []
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

export const BASIC_EQUIPMENT: InventoryItemLite[] = [
	{
		name: 'Torches',
		type: 'equipment',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Provides light for 6 Turns per usage dot',
		value: 10,
		slotType: 'PACK',
		slotIndex: 0
	},
	{
		name: 'Rations',
		type: 'equipment',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Food for the road. Heals all HP with Watch rest',
		value: 5,
		slotType: 'PACK',
		slotIndex: 0
	}
];

export const WEAPONS: InventoryItemLite[] = [
	{
		name: 'Dagger',
		type: 'weapon',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Light weapon, d6 damage',
		value: 10,
		slotType: 'PAWS',
		slotIndex: 0
	},
	{
		name: 'Sword',
		type: 'weapon',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Medium weapon, d6/d8 damage',
		value: 20,
		slotType: 'PAWS',
		slotIndex: 0
	},
	{
		name: 'Spear',
		type: 'weapon',
		size: 2,
		usage: 0,
		maxUsage: 3,
		description: 'Heavy weapon, d10 damage',
		value: 40,
		slotType: 'PAWS',
		slotIndex: 0
	}
];
