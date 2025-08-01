import {
  GameTime,
  Season,
  WeatherEntry,
  WEATHER_TABLES,
  SEASONAL_EVENTS,
  RestType,
  RestResult,
  TravelState,
  FatigueState,
  TravelHazard
} from '@/types/time';
import { MouseCharacter, CONDITIONS } from '@/types/character';

// Утилиты для работы со временем
export class GameTimeManager {
  private gameTime: GameTime = {
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

  getCurrentTime(): GameTime {
    return { ...this.gameTime };
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
export function rollWeather(season: Season['name']): WeatherEntry {
  const roll = rollD6() + rollD6();
  const weatherTable = WEATHER_TABLES[season];

  return weatherTable.find(entry => entry.roll === roll) || weatherTable[0];
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Утилиты для отдыха
export function performRest(character: MouseCharacter, restType: RestType): RestResult {
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
        .filter(c => c.clearRequirement.includes('short rest'))
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
        .filter(c => c.clearRequirement.includes('long rest') || c.clearRequirement.includes('Watch'))
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
        .filter(c => !c.clearRequirement.includes('permanent'))
        .map(c => c.id);
      break;
  }

  return result;
}

// Применение результатов отдыха к персонажу
export function applyRestResults(character: MouseCharacter, result: RestResult): MouseCharacter {
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

// Система усталости
export function checkFatigue(character: MouseCharacter, fatigueState: FatigueState): FatigueState {
  const updated = { ...fatigueState };

  if (!fatigueState.hasRestedToday) {
    updated.consecutiveDaysWithoutRest += 1;

    if (updated.consecutiveDaysWithoutRest >= 1) {
      updated.isExhausted = true;

      // Добавляем состояние усталости если его еще нет
      const hasExhaustedCondition = character.conditions.some(c => c.id === 'exhausted');
      if (!hasExhaustedCondition) {
        const exhaustedCondition = CONDITIONS.find(c => c.id === 'exhausted');
        if (exhaustedCondition) {
          character.conditions.push(exhaustedCondition);
        }
      }
    }
  } else {
    updated.consecutiveDaysWithoutRest = 0;
    updated.isExhausted = false;
  }

  return updated;
}

// Система путешествий
export function calculateTravelTime(
  fromHex: string,
  toHex: string,
  isDifficultTerrain: boolean = false
): number {
  // Базовое время: 1 период на гекс
  let watches = 1;

  // Сложная местность удваивает время
  if (isDifficultTerrain) {
    watches = 2;
  }

  return watches;
}

// Проверка опасностей путешествия
export function checkTravelHazards(weather: WeatherEntry): TravelHazard[] {
  const hazards: TravelHazard[] = [];

  if (weather.isPoorCondition) {
    hazards.push({
      name: 'Poor Weather',
      description: `Traveling in ${weather.weather.toLowerCase()} conditions`,
      saveType: 'str',
      difficulty: 12,
      consequence: 'Gain Exhausted condition'
    });
  }

  return hazards;
}

// Случайные встречи
export function shouldRollEncounter(
  timeScale: 'dungeon' | 'wilderness',
  turnsSinceLastCheck: number
): boolean {
  if (timeScale === 'dungeon') {
    // В подземельях проверяем каждые 3 хода
    return turnsSinceLastCheck >= 3;
  } else {
    // В дикой местности проверяем дважды в день (утром и вечером)
    return turnsSinceLastCheck >= 2; // 2 периода = полдня
  }
}

export function rollEncounter(): boolean {
  // d6, на 1 происходит встреча, на 2 - предзнаменование
  const roll = rollD6();
  return roll === 1;
}

export function rollOmen(): boolean {
  const roll = rollD6();
  return roll === 2;
}

// Фуражировка
export function forage(): number {
  // Возвращает d3 использования рационов
  return Math.floor(Math.random() * 3) + 1;
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
export function needsFood(character: MouseCharacter, daysSinceLastMeal: number): boolean {
  return daysSinceLastMeal >= 1;
}

// Добавление состояния голода
export function addHungerCondition(character: MouseCharacter): MouseCharacter {
  const updated = { ...character };
  const hasHungryCondition = character.conditions.some(c => c.id === 'hungry');

  if (!hasHungryCondition) {
    const hungryCondition = CONDITIONS.find(c => c.id === 'hungry');
    if (hungryCondition) {
      updated.conditions.push(hungryCondition);
    }
  }

  return updated;
}
