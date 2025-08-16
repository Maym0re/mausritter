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

// Функция для броска 3d6, оставляем 2 лучших
export function roll3d6KeepBest2(): number {
  const rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];

  rolls.sort((a, b) => b - a);
  return rolls[0] + rolls[1];
}

// Функция для броска d6
export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Функция для броска d66 (для физических деталей)
export function rollD66(): number {
  const tens = rollD6();
  const ones = rollD6();
  return tens * 10 + ones;
}

// Генерация случайного персонажа
export function generateRandomCharacter(): FullCharacter {
  // 1. Генерируем атрибуты
  const str = roll3d6KeepBest2();
  const dex = roll3d6KeepBest2();
  const wil = roll3d6KeepBest2();

  // 2. HP и пипы
  const hp = rollD6();
  const pips = rollD6();

  // 3. Находим предысторию по таблице
  const backgroundEntry = BACKGROUND_TABLE.find(entry =>
    entry.hp === hp && entry.pips === pips
  ) || BACKGROUND_TABLE[0]; // fallback

  // 4. Генерируем внешность
  const birthsign = BIRTHSIGNS[rollD6() - 1];
  const coatColor = COAT_COLORS[rollD6() - 1];
  const coatPattern = COAT_PATTERNS[rollD6() - 1];
  const physicalDetail = PHYSICAL_DETAILS[rollD66() - 11] || PHYSICAL_DETAILS[0];

  // 5. Определяем дополнительные предметы для слабых персонажей
  const highestAttribute = Math.max(str, dex, wil);
  const bonusItems: string[] = [];

  if (highestAttribute <= 7) {
    bonusItems.push(backgroundEntry.itemA, backgroundEntry.itemB);
  } else if (highestAttribute <= 9) {
    bonusItems.push(Math.random() < 0.5 ? backgroundEntry.itemA : backgroundEntry.itemB);
  }

  // 6. Создаем инвентарь
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

// Создание стартовог�� инвентаря
function createStartingInventory(backgroundEntry: BackgroundInitial, bonusItems: string[]): InventoryItem[] {
  const items: InventoryItem[] = [];

  // Базовое снаряжение
  items.push(...BASIC_EQUIPMENT.map(item => ({
    ...item,
    id: generateId(),
    slotType: 'PACK' as const,
    slotIndex: -1,
    characterId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  })));

  // Предметы из предыстории
  items.push(createItemFromDescription(backgroundEntry.itemA));
  items.push(createItemFromDescription(backgroundEntry.itemB));

  // Дополнительные предмет�� для слабых персонажей
  bonusItems.forEach(itemDesc => {
    items.push(createItemFromDescription(itemDesc));
  });

  // Оружие по выбору (берем случайное)
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

  // Размещаем предметы в слотах
  return assignItemsToSlots(items);
}

// Создание предмета из описания
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

  // Определяем тип ��редмета по описанию
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

// Генерация простого ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Генерация имени мыши
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

// Функция для получения предмета из инвентаря
export function getItemFromInventory(character: FullCharacter, itemId: string): InventoryItem | null {
  return character.inventory.find(item => item?.id === itemId) || null;
}

// Размещение предметов в слотах
function assignItemsToSlots(items: InventoryItem[]): InventoryItem[] {
  const result: InventoryItem[] = [];

  // Определяем количество слотов для каждого типа
  const slotCapacity = {
    PAWS: 2,
    BODY: 2,
    PACK: 6
  };

  const currentSlotIndex = {
    PAWS: 0,
    BODY: 0,
    PACK: 0
  };

  for (const item of items) {
    let placed = false;

    // Пробуем разместить в порядке приоритета: PACK -> BODY -> PAWS
    const slotTypes = ['PACK', 'BODY', 'PAWS'] as const;

    for (const slotType of slotTypes) {
      const availableSlots = slotCapacity[slotType] - currentSlotIndex[slotType];

      // Проверяем, поместится ли предмет
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
      console.warn(`Не удалось разместить предмет ${item.name}`);
    }
  }

  return result;
}

// Новая функция для добавления предмета в инвентарь
export function addItemToInventory(inventory: InventoryItemLite[], item: InventoryItemLite): { success: boolean; inventory: InventoryItemLite[] } {
  // Создаем копию инвентаря
  const newInventory = [...inventory];

  // Подсчитываем занятые слоты по типам
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

  // Пробуем разместить в порядке приоритета: PACK -> BODY -> PAWS
  const slotTypes = ['PACK', 'BODY', 'PAWS'] as const;

  for (const slotType of slotTypes) {
    const availableSlots = slotCapacity[slotType] - usedSlots[slotType];

    if (availableSlots >= item.size) {
      // Находим индекс для размещения
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

// Функция для удаления предмета из инвентаря
export function removeItemFromInventory(inventory: InventoryItem[], itemId: string): { success: boolean; inventory: InventoryItem[] } {
  const itemIndex = inventory.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return { success: false, inventory };
  }

  const newInventory = inventory.filter(item => item.id !== itemId);
  return { success: true, inventory: newInventory };
}

// Функция для получения предметов по типу слота
export function getItemsBySlotType(inventory: InventoryItem[], slotType: 'PAWS' | 'BODY' | 'PACK'): InventoryItem[] {
  return inventory.filter(item => item.slotType === slotType).sort((a, b) => a.slotIndex - b.slotIndex);
}

// Функция для получения структурированного представления инвентаря (для UI)
export function getInventorySlots(inventory: InventoryItem[]) {
  return {
    paws: getItemsBySlotType(inventory, 'PAWS'),
    body: getItemsBySlotType(inventory, 'BODY'),
    pack: getItemsBySlotType(inventory, 'PACK')
  };
}

// Функция для перемещения предмета в другой слот
export function moveItemToSlot(
  inventory: InventoryItem[],
  itemId: string,
  newSlotType: 'PAWS' | 'BODY' | 'PACK',
  newSlotIndex: number
): { success: boolean; inventory: InventoryItem[]; error?: string } {
  const itemIndex = inventory.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return { success: false, inventory, error: 'Предмет не найден' };
  }

  const item = inventory[itemIndex];
  const newInventory = [...inventory];

  // Проверяем, есть ли место в целевом слоте
  const slotCapacity = {
    PAWS: 2,
    BODY: 2,
    PACK: 6
  };

  const itemsInTargetSlot = newInventory.filter(i => i.slotType === newSlotType && i.id !== itemId);
  const usedSlotsInTarget = itemsInTargetSlot.reduce((sum, i) => sum + i.size, 0);

  if (usedSlotsInTarget + item.size > slotCapacity[newSlotType]) {
    return { success: false, inventory, error: 'Недостаточно места в целевом слоте' };
  }

  // Обновляем предмет
  newInventory[itemIndex] = {
    ...item,
    slotType: newSlotType,
    slotIndex: newSlotIndex
  };

  return { success: true, inventory: newInventory };
}

// Проверка н�� перегрузку
export function isEncumbered(character: FullCharacter): boolean {
  const totalSlots = 10; // 2 paws + 2 body + 6 pack
  const usedSlots = getTotalUsedSlots(character);
  const conditionSlots = character.conditions.length;

  return (usedSlots + conditionSlots) > totalSlots;
}

// Подсчет использованных слотов
export function getTotalUsedSlots(character: FullCharacter): number {
  let used = 0;

  character.inventory.forEach(item => {
    if (item) {
      used += item.size;
    }
  });

  return used;
}

// Получение доступных слотов
export function getAvailableSlots(character: FullCharacter): number {
  const totalSlots = 10;
  const usedSlots = getTotalUsedSlots(character);
  const conditionSlots = character.conditions.length;

  return Math.max(0, totalSlots - usedSlots - conditionSlots);
}
