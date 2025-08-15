import {
	BACKGROUND_TABLE,
	BIRTHSIGNS,
	COAT_COLORS,
	COAT_PATTERNS,
	PHYSICAL_DETAILS,
	BASIC_EQUIPMENT,
	WEAPONS,
	FullCharacter, BackgroundInitial
} from '@/types/character';
import { Background, InventoryItem } from "@prisma/client";

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
    playerId: '',
    player: null,
    campaignId: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
  };

  return character;
}

// Создание стартового инвентаря
function createStartingInventory(backgroundEntry: BackgroundInitial, bonusItems: string[]): InventoryItem[] {
  const items: InventoryItem[] = [];

  // Базовое снаряжение
  items.push(...BASIC_EQUIPMENT.map(item => ({ ...item, id: generateId() })));

  // Предметы из предыстории
  items.push(createItemFromDescription(backgroundEntry.itemA));
  items.push(createItemFromDescription(backgroundEntry.itemB));

  // Дополнительные предметы для слабых персонажей
  bonusItems.forEach(itemDesc => {
    items.push(createItemFromDescription(itemDesc));
  });

  // Оружие по выбору (берем случайное)
  const randomWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
  items.push({ ...randomWeapon, id: generateId() });

  items.forEach(item => {
    const result = addItemToInventory(currentInventory, item);
    if (result.success) {
      currentInventory = result.inventory;
    }
  });

  return currentInventory;
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

  // Определяем тип предмета по описанию
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

export function addItemToInventory(inventory: InventorySlots, item: InventoryItem): { success: boolean; inventory: InventorySlots } {
  // Создаем глубокую копию инвентаря
  const newInventory: InventoryItem[] = []

  // Ищем свободные слоты в порядке: pack -> body -> paws
  const { pack, body, paws } = newInventory;

  // Проверяем pack слоты
  for (let i = 0; i < pack.length; i++) {
    if (!pack[i]) {
      if (item.size === 1 || (item.size === 2 && i < pack.length - 1 && !pack[i + 1])) {
        pack[i] = item;
        if (item.size === 2) pack[i + 1] = null; // резервируем второй слот
        return { success: true, inventory: newInventory };
      }
    }
  }

  // Проверяем body слоты
  for (let i = 0; i < body.length; i++) {
    if (!body[i]) {
      if (item.size === 1 || (item.size === 2 && i < body.length - 1 && !body[i + 1])) {
        body[i] = item;
        if (item.size === 2) body[i + 1] = null;
        return { success: true, inventory: newInventory };
      }
    }
  }

  // Проверяем paw слоты
  for (let i = 0; i < paws.length; i++) {
    if (!paws[i]) {
      if (item.size === 1 || (item.size === 2 && i < paws.length - 1 && !paws[i + 1])) {
        paws[i] = item;
        if (item.size === 2) paws[i + 1] = null;
        return { success: true, inventory: newInventory };
      }
    }
  }

  // Нет места - возвращаем исходный инвентарь
  return { success: false, inventory };
}

// Функция для удаления предмета из инвентаря
// export function removeItemFromInventory(character: FullCharacter, itemId: string): boolean {
//   const { paws, body, pack } = character.inventory;
//
//   // Проверяем все слоты
//   const allSlots = [
//     { slots: paws, name: 'paws' },
//     { slots: body, name: 'body' },
//     { slots: pack, name: 'pack' }
//   ];
//
//   for (const slotGroup of allSlots) {
//     for (let i = 0; i < slotGroup.slots.length; i++) {
//       if (slotGroup.slots[i]?.id === itemId) {
//         const item = slotGroup.slots[i];
//         slotGroup.slots[i] = null;
//
//         // Если предмет занимал 2 слота, освобождаем второй
//         if (item?.size === 2 && i < slotGroup.slots.length - 1) {
//           slotGroup.slots[i + 1] = null;
//         }
//
//         return true;
//       }
//     }
//   }
//
//   return false;
// }

// Проверка на перегрузку
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
