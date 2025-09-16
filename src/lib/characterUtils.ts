import {
	BACKGROUND_TABLE,
	BIRTHSIGNS,
	COAT_COLORS,
	COAT_PATTERNS,
	PHYSICAL_DETAILS,
	BASIC_EQUIPMENT,
	WEAPONS,
	FullCharacter, BackgroundInitial, InventoryItemLite
} from '@/types/character';
import { InventoryItem } from "@prisma/client";

// Roll 3d6 and keep the best 2
export function roll3d6KeepBest2(): number {
  const rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];

  rolls.sort((a, b) => b - a);
  return rolls[0] + rolls[1];
}

// Roll 1d6
export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Roll d66 (for physical details table)
export function rollD66(): number {
  const tens = rollD6();
  const ones = rollD6();
  return tens * 10 + ones;
}

// Generate random character
export function generateRandomCharacter(): FullCharacter {
  // 1. Generate attributes
  const str = roll3d6KeepBest2();
  const dex = roll3d6KeepBest2();
  const wil = roll3d6KeepBest2();

  // 2. HP and pips
  const hp = rollD6();
  const pips = rollD6();

  // 3. Find background entry by table
  const backgroundEntry = BACKGROUND_TABLE.find(entry =>
    entry.hp === hp && entry.pips === pips
  ) || BACKGROUND_TABLE[0]; // fallback

  // 4. Generate appearance
  const birthsign = BIRTHSIGNS[rollD6() - 1];
  const coatColor = COAT_COLORS[rollD6() - 1];
  const coatPattern = COAT_PATTERNS[rollD6() - 1];
  const physicalDetail = PHYSICAL_DETAILS[rollD66() - 11] || PHYSICAL_DETAILS[0];

  // 5. Determine bonus items for weak characters
  const highestAttribute = Math.max(str, dex, wil);
  const bonusItems: string[] = [];

  if (highestAttribute <= 7) {
    bonusItems.push(backgroundEntry.itemA, backgroundEntry.itemB);
  } else if (highestAttribute <= 9) {
    bonusItems.push(Math.random() < 0.5 ? backgroundEntry.itemA : backgroundEntry.itemB);
  }

  // 6. Create initial inventory
  const inventory = createStartingInventory(backgroundEntry, bonusItems);

	const character: FullCharacter = {
    id: generateId(),
    name: generateMouseName(),

    str,
    dex,
    wil,

    hp,
    maxHp: hp,
    pips,

    level: 1,
    xp: 0,
    grit: 0,

    background: {
			id: '',
      name: backgroundEntry.name,
      itemA: backgroundEntry.itemA,
      itemB: backgroundEntry.itemB,
	    createdAt: new Date(),
	    updatedAt: new Date()
    },
    birthsign : {
			...birthsign,
	    id: '',
	    createdAt: new Date(),
	    updatedAt: new Date(),
    },
    coat: {
      color: coatColor,
      pattern: coatPattern,
	    id: '',
	    createdAt: new Date(),
	    updatedAt: new Date(),
    },
    physicalDetail,

    inventory,
    conditions: [],
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
  };

  return character;
}

// Create starting inventory
function createStartingInventory(backgroundEntry: BackgroundInitial, bonusItems: string[]): InventoryItem[] {
  const items: InventoryItem[] = [];

  // Basic equipment
  items.push(...BASIC_EQUIPMENT.map(item => ({
    ...item,
    id: generateId(),
    slotType: 'PACK' as const,
    slotIndex: -1,
    characterId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  })));

  // Background items
  items.push(createItemFromDescription(backgroundEntry.itemA));
  items.push(createItemFromDescription(backgroundEntry.itemB));

  // Bonus items (for weak characters)
  bonusItems.forEach(itemDesc => {
    items.push(createItemFromDescription(itemDesc));
  });

  // Random weapon choice
  const randomWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
  items.push({
    ...randomWeapon,
    id: generateId(),
    slotType: 'PACK' as const,
    slotIndex: -1,
    characterId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  // Place items into slots
  return assignItemsToSlots(items);
}

// Create item from description
function createItemFromDescription(description: string): InventoryItem {
  const item: InventoryItem = {
    id: generateId(),
    name: description,
    type: 'equipment',
    size: 1,
    usage: 0,
    maxUsage: 3,
    description,
	  value: 1,
    createdAt: new Date(),
		updatedAt: new Date(),
	  slotType: 'PACK',
	  slotIndex: -1,
	  characterId: ''
  };

  // Determine item type by description
  if (description.includes('Spell:')) {
    item.type = 'spell';
    item.name = description.replace('Spell: ', '');
  } else if (description.includes('armour') || description.includes('Shield')) {
    item.type = 'armor';
    if (description.includes('Heavy')) {
      item.size = 2;
    }
  } else if (description.includes('d6') || description.includes('d8') || description.includes('d10')) {
    item.type = 'weapon';
    if (description.includes('Heavy')) {
      item.size = 2;
    }
  }

  return item;
}

// Simple ID generator
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Generate mouse name
function generateMouseName(): string {
  const names = [
    'Acorn', 'Basil', 'Berry', 'Biscuit', 'Bramble', 'Brie', 'Burdock',
    'Camomile', 'Cedar', 'Clover', 'Colby', 'Crumb', 'Dandelion', 'Fennel',
    'Fig', 'Gorse', 'Hazel', 'Holly', 'Juniper', 'Lavender', 'Maple',
    'Moss', 'Nutkin', 'Oliver', 'Parsley', 'Pip', 'Poppy', 'Rosemary',
    'Sage', 'Sorrel', 'Thyme', 'Violet', 'Willow', 'Wisteria'
  ];

  return names[Math.floor(Math.random() * names.length)];
}

// Get item from inventory by id
export function getItemFromInventory(character: FullCharacter, itemId: string): InventoryItem | null {
  return character.inventory.find(item => item?.id === itemId) || null;
}

// Assign items to slots
function assignItemsToSlots(items: InventoryItem[]): InventoryItem[] {
  const result: InventoryItem[] = [];

  // Slot capacities
  const slotCapacity = {
    PAWS: 2,
    BODY: 2,
    PACK: 6
  };

  // Track current indices
  const currentSlotIndex = {
    PAWS: 0,
    BODY: 0,
    PACK: 0
  };

  for (const item of items) {
    let placed = false;

    // Try placing items priority: PAWS -> BODY -> PACK
    const slotTypes = ['PACK', 'BODY', 'PAWS'] as const;

    for (const slotType of slotTypes) {
      const availableSlots = slotCapacity[slotType] - currentSlotIndex[slotType];

      // Check if item fits
      if (availableSlots >= item.size) {
        const newItem = {
          ...item,
          slotType,
          slotIndex: currentSlotIndex[slotType]
        };

        result.push(newItem);
        currentSlotIndex[slotType] += item.size;
        placed = true;
        break;
      }
    }

    if (!placed) {
      console.warn(`Failed to place item ${item.name}`);
    }
  }

  return result;
}

// Add new item to inventory
export function addItemToInventory(inventory: InventoryItemLite[], item: InventoryItemLite): { success: boolean; inventory: InventoryItemLite[] } {
  // Create a shallow copy of inventory
  const newInventory = [...inventory];

  // Count used slots per type
  const usedSlots = {
    PAWS: 0,
    BODY: 0,
    PACK: 0
  };

  for (const inventoryItem of newInventory) {
    usedSlots[inventoryItem.slotType] += inventoryItem.size;
  }

  const slotCapacity = {
    PAWS: 2,
    BODY: 2,
    PACK: 6
  };

  // Try placing in priority: PACK -> BODY -> PAWS
  const slotTypes = ['PACK', 'BODY', 'PAWS'] as const;

  for (const slotType of slotTypes) {
    const availableSlots = slotCapacity[slotType] - usedSlots[slotType];

    if (availableSlots >= item.size) {
      // Determine index to place item
      let slotIndex = 0;
      const itemsInSlot = newInventory.filter(i => i.slotType === slotType).sort((a, b) => a.slotIndex - b.slotIndex);

      for (const existingItem of itemsInSlot) {
        if (existingItem.slotIndex > slotIndex) {
          break;
        }
        slotIndex = existingItem.slotIndex + existingItem.size;
      }

      const newItem = {
        ...item,
        slotType,
        slotIndex
      };

      newInventory.push(newItem);
      return { success: true, inventory: newInventory };
    }
  }

  return { success: false, inventory };
}

// Remove item from inventory
export function removeItemFromInventory(inventory: InventoryItem[], itemName: string): { success: boolean; inventory: InventoryItem[] } {
  const itemIndex = inventory.findIndex(item => item.name === itemName);

  if (itemIndex === -1) {
    return { success: false, inventory };
  }

  const newInventory = inventory.filter(item => item.name !== itemName);
  return { success: true, inventory: newInventory };
}

// Get items by slot type
export function getItemsBySlotType(inventory: InventoryItem[], slotType: 'PAWS' | 'BODY' | 'PACK'): InventoryItem[] {
  return inventory.filter(item => item.slotType === slotType).sort((a, b) => a.slotIndex - b.slotIndex);
}

// Structured inventory representation (for UI)
export function getInventorySlots(inventory: InventoryItem[]) {
  return {
    paws: getItemsBySlotType(inventory, 'PAWS'),
    body: getItemsBySlotType(inventory, 'BODY'),
    pack: getItemsBySlotType(inventory, 'PACK')
  };
}

// Move item to another slot
export function moveItemToSlot(
  inventory: InventoryItem[],
  itemName: string,
  newSlotType: 'PAWS' | 'BODY' | 'PACK',
  newSlotIndex: number
): { success: boolean; inventory: InventoryItem[]; error?: string } {
  const itemIndex = inventory.findIndex(item => item.name === itemName);

  if (itemIndex === -1) {
    return { success: false, inventory, error: 'Item not found' };
  }

  const item = inventory[itemIndex];
  const newInventory = [...inventory];

  // Check if there is space in target slot
  const slotCapacity = {
    PAWS: 2,
    BODY: 2,
    PACK: 6
  };

  const itemsInTargetSlot = newInventory.filter(i => i.slotType === newSlotType && i.name !== itemName);
  const usedSlotsInTarget = itemsInTargetSlot.reduce((sum, i) => sum + i.size, 0);

  if (usedSlotsInTarget + item.size > slotCapacity[newSlotType]) {
    return { success: false, inventory, error: 'Not enough space in target slot' };
  }

  // Update item
  newInventory[itemIndex] = {
    ...item,
    slotType: newSlotType,
    slotIndex: newSlotIndex
  };

  return { success: true, inventory: newInventory };
}

// Encumbrance check
export function isEncumbered(character: FullCharacter): boolean {
  const totalSlots = 10; // 2 paws + 2 body + 6 pack
  const usedSlots = getTotalUsedSlots(character);
  const conditionSlots = character.conditions.length;

  return (usedSlots + conditionSlots) > totalSlots;
}

// Count used slots
export function getTotalUsedSlots(character: FullCharacter): number {
  let used = 0;

  character.inventory.forEach(item => {
    if (item) {
      used += item.size;
    }
  });

  return used;
}

export function getAvailableSlots(character: FullCharacter): number {
  const totalSlots = 10;
  const usedSlots = getTotalUsedSlots(character);
  const conditionSlots = character.conditions.length;

  return Math.max(0, totalSlots - usedSlots - conditionSlots);
}
