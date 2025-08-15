import {
	Season,
	WEATHER_TABLES,
	SEASONAL_EVENTS,
	RestType,
	RestResult,
	GameTimeCore, WeatherEntryLight
} from '@/types/time';
import { CONDITIONS, FullCharacter } from '@/types/character';
import { WeatherEntry } from "@prisma/client";

// Утилиты для работы со временем
export class GameTimeManager {
  private gameTime: GameTimeCore = {
    rounds: 0,
    turns: 0,
    watches: 0,
    days: 0
  };

  // Добавить раунды (боевое время)
  addRounds(rounds: number): void {
    this.gameTime.rounds += rounds;
    this.normalizeTime();
  }

  // Добавить ходы (исследование)
  addTurns(turns: number): void {
    this.gameTime.turns += turns;
    this.normalizeTime();
  }

  // Добавить периоды (путешествие)
  addWatches(watches: number): void {
    this.gameTime.watches += watches;
    this.normalizeTime();
  }

  // Нормализация времени (конвертация в большие единицы)
  private normalizeTime(): void {
    // Конвертируем раунды в ходы (примерно 10 раундов = 1 ход)
    if (this.gameTime.rounds >= 10) {
      this.gameTime.turns += Math.floor(this.gameTime.rounds / 10);
      this.gameTime.rounds = this.gameTime.rounds % 10;
    }

    // Конвертируем ходы в периоды (36 ходов = 1 период)
    if (this.gameTime.turns >= 36) {
      this.gameTime.watches += Math.floor(this.gameTime.turns / 36);
      this.gameTime.turns = this.gameTime.turns % 36;
    }

    // Конвертируем периоды в дни (4 периода = 1 день)
    if (this.gameTime.watches >= 4) {
      this.gameTime.days += Math.floor(this.gameTime.watches / 4);
      this.gameTime.watches = this.gameTime.watches % 4;
    }
  }

  getCurrentTime(): GameTimeCore {
    return { ...this.gameTime };
  }

  // Установить время напрямую
  setTime(time: GameTimeCore): void {
    this.gameTime = { ...time };
  }

  // Получить текущий сезон на основе дней
  getCurrentSeason(): Season['name'] {
    const dayOfYear = this.gameTime.days % 365;

    if (dayOfYear < 91) return 'spring';
    if (dayOfYear < 182) return 'summer';
    if (dayOfYear < 273) return 'autumn';
    return 'winter';
  }

  // Форматированное время для отображения
  getFormattedTime(): string {
    const { days, watches, turns, rounds } = this.gameTime;
    const parts = [];

    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (watches > 0) parts.push(`${watches} watch${watches !== 1 ? 'es' : ''}`);
    if (turns > 0) parts.push(`${turns} turn${turns !== 1 ? 's' : ''}`);
    if (rounds > 0) parts.push(`${rounds} round${rounds !== 1 ? 's' : ''}`);

    return parts.join(', ') || 'Start of adventure';
  }
}

// Утилиты для погоды
export function rollWeather(season: Season['name']): WeatherEntryLight {
  const roll = rollD6() + rollD6();
  const weatherTable = WEATHER_TABLES[season];

  return weatherTable.find(entry => entry.roll === roll) || weatherTable[0];
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Утилиты для отдыха
export function performRest(character: FullCharacter, restType: RestType): RestResult {
  const result: RestResult = {
    type: restType,
    hpHealed: 0,
    conditionsCleared: [],
    timeTaken: ''
  };

  switch (restType) {
    case 'short':
      // Короткий отдых: 1 ход, восстанавливает d6+1 HP
      result.hpHealed = rollD6() + 1;
      result.timeTaken = '1 Turn';

      // Убираем некоторые условия
      result.conditionsCleared = character.conditions
        .filter(c => c.clearRequirement?.includes('short rest'))
        .map(c => c.id);
      break;

    case 'long':
      // Длинный отдых: 1 период, восстанавливает все HP
      result.hpHealed = character.maxHp - character.hp;
      result.timeTaken = '1 Watch';

      // Если HP был полон, восстанавливаем d6 к атрибуту
      if (character.hp === character.maxHp) {
        const attributes = ['str', 'dex', 'wil'] as const;
        const randomAttr = attributes[Math.floor(Math.random() * 3)];
        result.attributeHealed = {
          attribute: randomAttr,
          amount: rollD6()
        };
      }

      // Убираем условия, требующие длинного отдыха
      result.conditionsCleared = character.conditions
        .filter(c => c.clearRequirement?.includes('long rest') || c.clearRequirement?.includes('Watch'))
        .map(c => c.id);
      break;

    case 'full':
      // Полный отдых: неделя в безопасности
      result.hpHealed = character.maxHp - character.hp;
      result.timeTaken = '1 Week';

      // Восстанавливаем все атрибуты до максимума
      result.attributeHealed = {
        attribute: 'str', // Представляет восстановление всех атрибутов
        amount: 100 // Специальное значение для полного восстановления
      };

      // Убираем большинство долгосрочных условий
      result.conditionsCleared = character.conditions
        .filter(c => !c.clearRequirement?.includes('permanent'))
        .map(c => c.id);
      break;
  }

  return result;
}

// Применение результатов отдыха к персонажу
export function applyRestResults(character: FullCharacter, result: RestResult): FullCharacter {
  const updated = { ...character };

  // Лечим HP
  updated.hp = Math.min(updated.maxHp, updated.hp + result.hpHealed);

  // Лечим атрибуты
  if (result.attributeHealed) {
    if (result.type === 'full') {
      // Полное восстановление - возвращаем к стартовым значениям
      // Здесь нужно было бы хранить базовые значения атрибутов
      // Пока просто восстанавливаем по 6 очков каждому
      updated.str = Math.min(18, updated.str + 6);
      updated.dex = Math.min(18, updated.dex + 6);
      updated.wil = Math.min(18, updated.wil + 6);
    } else {
      // Обычное лечение атрибута
      const { attribute, amount } = result.attributeHealed;
      updated[attribute] = Math.min(18, updated[attribute] + amount);
    }
  }

  // Убираем излеченные условия
  updated.conditions = updated.conditions.filter(
    condition => !result.conditionsCleared.includes(condition.id)
  );

  return updated;
}

// Генерация сезонного события
export function rollSeasonalEvent(season: Season['name']): string {
  const events = SEASONAL_EVENTS[season];
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex].description;
}

// Получение времени суток по периодам
export function getTimeOfDay(watch: number): string {
  const timeOfDay = watch % 4;
  switch (timeOfDay) {
    case 0: return 'Morning';
    case 1: return 'Midday';
    case 2: return 'Evening';
    case 3: return 'Night';
    default: return 'Morning';
  }
}

// Проверка, нужно ли есть
export function needsFood(character: FullCharacter, daysSinceLastMeal: number): boolean {
  return daysSinceLastMeal >= 1;
}

// Добавление состояния голода
export function addHungerCondition(character: FullCharacter): FullCharacter {
  const updated = { ...character };
  const hasHungryCondition = character.conditions.some(c => c.id === 'hungry');

  if (!hasHungryCondition) {
    const hungryCondition = CONDITIONS.find(c => c.name === 'Hungry');
    if (hungryCondition) {
      updated.conditions.push(hungryCondition);
    }
  }

  return updated;
}
