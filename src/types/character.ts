import { Background, Birthsign, Condition, InventoryItem, Prisma, WeatherEntry } from '@prisma/client';

const campaignInclude = Prisma.validator<Prisma.CampaignInclude>()({
	players: {include: {user: true}},
	gameTime: true,
	weatherEntry: true,
	gm: true,
});

export type FullCampaign =
	Prisma.CampaignGetPayload<{ include: typeof campaignInclude }>;

const conditionLite = Prisma.validator<Prisma.ConditionSelect>()({
	id: true,
	name: true,
	description: true,
	clearRequirement: true,
	effects: true,
})

const characterInclude = Prisma.validator<Prisma.CharacterInclude>()({
	player: true,
	conditions: {select: conditionLite},
	background: true,
	birthsign: true,
	coat: true,
	inventory: true,
	campaign: {include: campaignInclude},
})

export type FullCharacter =
	Prisma.CharacterGetPayload<{ include: typeof characterInclude }>;

export type BirthsignLite = Pick<Birthsign, 'sign' | 'disposition'>;
export type BackgroundLite = Pick<Background, 'name' | 'itemA' | 'itemB'>;

export type BackgroundInitial = BackgroundLite & {
	hp: number;
	pips: number;
}

export type InventoryItemLite = Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt' | 'slotType' | 'slotIndex' | 'characterId'>;
export type ConditionLite = Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>;

// Таблицы генерации из SRD
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

// Условия из SRD
export const CONDITIONS: ConditionLite[] = [
	{
		name: 'Injured',
		description: 'Incapacitated until tended to by an ally and take a short rest',
		clearRequirement: 'Tended to by ally + short rest',
		effects: []
	},
	{
		name: 'Exhausted',
		description: 'Cannot run, makes all saves with Disadvantage',
		clearRequirement: 'Long rest',
		effects: ['No running', 'Disadvantage on all saves']
	},
	{
		name: 'Frightened',
		description: 'Must make WIL save to approach the source of fear',
		clearRequirement: 'Short rest away from source',
		effects: ['WIL save to approach fear source']
	},
	{
		name: 'Hungry',
		description: 'Has not eaten for a day',
		clearRequirement: 'Eat a meal',
		effects: ['Disadvantage on STR saves']
	},
	{
		name: 'Drained',
		description: 'Magical energy depleted',
		clearRequirement: 'Long rest',
		effects: ['Cannot cast spells']
	}
];

// Базовое снаряжение
export const BASIC_EQUIPMENT: InventoryItemLite[] = [
	{
		name: 'Torches',
		type: 'equipment',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Provides light for 6 Turns per usage dot',
		value: 10,
	},
	{
		name: 'Rations',
		type: 'equipment',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Food for the road. Heals all HP with Watch rest',
		value: 5,
	}
];

// Оружие
export const WEAPONS: InventoryItemLite[] = [
	{
		name: 'Dagger',
		type: 'weapon',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Light weapon, d6 damage',
		value: 10
	},
	{
		name: 'Sword',
		type: 'weapon',
		size: 1,
		usage: 0,
		maxUsage: 3,
		description: 'Medium weapon, d6/d8 damage',
		value: 20
	},
	{
		name: 'Spear',
		type: 'weapon',
		size: 2,
		usage: 0,
		maxUsage: 3,
		description: 'Heavy weapon, d10 damage',
		value: 40
	}
];
