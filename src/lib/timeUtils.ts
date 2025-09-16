import {
	Season,
	WEATHER_TABLES,
	SEASONAL_EVENTS,
	RestType,
	RestResult,
	GameTimeCore, WeatherEntryLight
} from '@/types/time';
import { CONDITIONS, FullCharacter } from '@/types/character';

export class GameTimeManager {
  private gameTime: GameTimeCore = {
    rounds: 0,
    turns: 0,
    watches: 0,
    days: 0
  };

  addRounds(rounds: number): void {
    this.gameTime.rounds += rounds;
    this.normalizeTime();
  }

  addTurns(turns: number): void {
    this.gameTime.turns += turns;
    this.normalizeTime();
  }

  addWatches(watches: number): void {
    this.gameTime.watches += watches;
    this.normalizeTime();
  }

  private normalizeTime(): void {
    if (this.gameTime.rounds >= 10) {
      this.gameTime.turns += Math.floor(this.gameTime.rounds / 10);
      this.gameTime.rounds = this.gameTime.rounds % 10;
    }

    if (this.gameTime.turns >= 36) {
      this.gameTime.watches += Math.floor(this.gameTime.turns / 36);
      this.gameTime.turns = this.gameTime.turns % 36;
    }

    if (this.gameTime.watches >= 4) {
      this.gameTime.days += Math.floor(this.gameTime.watches / 4);
      this.gameTime.watches = this.gameTime.watches % 4;
    }
  }

  getCurrentTime(): GameTimeCore {
    return { ...this.gameTime };
  }

  setTime(time: GameTimeCore): void {
    this.gameTime = { ...time };
  }

  getCurrentSeason(): Season['name'] {
    const dayOfYear = this.gameTime.days % 365;

    if (dayOfYear < 91) return 'spring';
    if (dayOfYear < 182) return 'summer';
    if (dayOfYear < 273) return 'autumn';
    return 'winter';
  }

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

export function rollWeather(season: Season['name']): WeatherEntryLight {
  const roll = rollD6() + rollD6();
  const weatherTable = WEATHER_TABLES[season];

  return weatherTable.find(entry => entry.roll === roll) || weatherTable[0];
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function performRest(character: FullCharacter, restType: RestType): RestResult {
  const result: RestResult = {
    type: restType,
    hpHealed: 0,
    conditionsCleared: [],
    timeTaken: ''
  };

  switch (restType) {
    case 'short':
      result.hpHealed = rollD6() + 1;
      result.timeTaken = '1 Turn';

      result.conditionsCleared = character.conditions
        .filter(c => c.clearRequirement?.includes('short rest'))
        .map(c => c.id);
      break;

    case 'long':
      result.hpHealed = character.maxHp - character.hp;
      result.timeTaken = '1 Watch';

      if (character.hp === character.maxHp) {
        const attributes = ['str', 'dex', 'wil'] as const;
        const randomAttr = attributes[Math.floor(Math.random() * 3)];
        result.attributeHealed = {
          attribute: randomAttr,
          amount: rollD6()
        };
      }

      result.conditionsCleared = character.conditions
        .filter(c => c.clearRequirement?.includes('long rest') || c.clearRequirement?.includes('Watch'))
        .map(c => c.id);
      break;

    case 'full':
      result.hpHealed = character.maxHp - character.hp;
      result.timeTaken = '1 Week';

      result.attributeHealed = {
        attribute: 'str',
        amount: 100
      };

      result.conditionsCleared = character.conditions
        .filter(c => !c.clearRequirement?.includes('permanent'))
        .map(c => c.id);
      break;
  }

  return result;
}

export function applyRestResults(character: FullCharacter, result: RestResult): FullCharacter {
  const updated = { ...character };

  updated.hp = Math.min(updated.maxHp, updated.hp + result.hpHealed);

  if (result.attributeHealed) {
    if (result.type === 'full') {
      updated.str = Math.min(18, updated.str + 6);
      updated.dex = Math.min(18, updated.dex + 6);
      updated.wil = Math.min(18, updated.wil + 6);
    } else {
      const { attribute, amount } = result.attributeHealed;
      updated[attribute] = Math.min(18, updated[attribute] + amount);
    }
  }

  updated.conditions = updated.conditions.filter(
    condition => !result.conditionsCleared.includes(condition.id)
  );

  return updated;
}

export function rollSeasonalEvent(season: Season['name']): string {
  const events = SEASONAL_EVENTS[season];
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex].description;
}

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

export function needsFood(character: FullCharacter, daysSinceLastMeal: number): boolean {
  return daysSinceLastMeal >= 1;
}

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
