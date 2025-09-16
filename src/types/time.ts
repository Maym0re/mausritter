import { Prisma, WeatherEntry } from "@prisma/client";
import type { Character as PrismaCharacter, GameTime as PrismaGameTime } from "@prisma/client";

export const gameTimeLight = Prisma.validator<Prisma.GameTimeInclude>()({
  campaign: true,
});

export type GameTime = Prisma.GameTimeGetPayload<{ include: typeof gameTimeLight }>;

export type GameTimeCore = Pick<PrismaGameTime, 'rounds' | 'turns' | 'watches' | 'days'>;

export type WeatherEntryLight = Pick<WeatherEntry, 'roll' | 'weather' | 'isPoorCondition'>;

export type TimeScale = 'round' | 'turn' | 'watch';


export interface Season {
  name: 'spring' | 'summer' | 'autumn' | 'winter';
  weatherTable: WeatherEntry[];
  events: SeasonalEvent[];
}

export interface SeasonalEvent {
  description: string;
  effect?: string;
}

export interface TravelState {
  currentHex: string;
  destination?: string;
  watchesInCurrentHex: number;
  hasRested: boolean;
  weatherToday: string;
  isPoorWeather: boolean;
}

export const WEATHER_TABLES: Record<Season['name'], WeatherEntryLight[]> = {
  spring: [
    { roll: 2, weather: 'Rain storm', isPoorCondition: true },
    { roll: 3, weather: 'Drizzle', isPoorCondition: false },
    { roll: 4, weather: 'Drizzle', isPoorCondition: false },
    { roll: 5, weather: 'Drizzle', isPoorCondition: false },
    { roll: 6, weather: 'Overcast', isPoorCondition: false },
    { roll: 7, weather: 'Overcast', isPoorCondition: false },
    { roll: 8, weather: 'Overcast', isPoorCondition: false },
    { roll: 9, weather: 'Bright and sunny', isPoorCondition: false },
    { roll: 10, weather: 'Bright and sunny', isPoorCondition: false },
    { roll: 11, weather: 'Bright and sunny', isPoorCondition: false },
    { roll: 12, weather: 'Clear and warm', isPoorCondition: false }
  ],
  summer: [
    { roll: 2, weather: 'Thunder storm', isPoorCondition: true },
    { roll: 3, weather: 'Very hot', isPoorCondition: true },
    { roll: 4, weather: 'Very hot', isPoorCondition: true },
    { roll: 5, weather: 'Very hot', isPoorCondition: true },
    { roll: 6, weather: 'Clear, hot', isPoorCondition: false },
    { roll: 7, weather: 'Clear, hot', isPoorCondition: false },
    { roll: 8, weather: 'Clear, hot', isPoorCondition: false },
    { roll: 9, weather: 'Pleasantly sunny', isPoorCondition: false },
    { roll: 10, weather: 'Pleasantly sunny', isPoorCondition: false },
    { roll: 11, weather: 'Pleasantly sunny', isPoorCondition: false },
    { roll: 12, weather: 'Beautifully warm', isPoorCondition: false }
  ],
  autumn: [
    { roll: 2, weather: 'Wild winds', isPoorCondition: true },
    { roll: 3, weather: 'Heavy rain', isPoorCondition: true },
    { roll: 4, weather: 'Heavy rain', isPoorCondition: true },
    { roll: 5, weather: 'Heavy rain', isPoorCondition: true },
    { roll: 6, weather: 'Cool', isPoorCondition: false },
    { roll: 7, weather: 'Cool', isPoorCondition: false },
    { roll: 8, weather: 'Cool', isPoorCondition: false },
    { roll: 9, weather: 'Patchy rain', isPoorCondition: false },
    { roll: 10, weather: 'Patchy rain', isPoorCondition: false },
    { roll: 11, weather: 'Patchy rain', isPoorCondition: false },
    { roll: 12, weather: 'Clear and crisp', isPoorCondition: false }
  ],
  winter: [
    { roll: 2, weather: 'Snow storm', isPoorCondition: true },
    { roll: 3, weather: 'Sleet', isPoorCondition: true },
    { roll: 4, weather: 'Sleet', isPoorCondition: true },
    { roll: 5, weather: 'Sleet', isPoorCondition: true },
    { roll: 6, weather: 'Bitter cold', isPoorCondition: true },
    { roll: 7, weather: 'Bitter cold', isPoorCondition: true },
    { roll: 8, weather: 'Bitter cold', isPoorCondition: true },
    { roll: 9, weather: 'Overcast', isPoorCondition: false },
    { roll: 10, weather: 'Overcast', isPoorCondition: false },
    { roll: 11, weather: 'Overcast', isPoorCondition: false },
    { roll: 12, weather: 'Clear and crisp', isPoorCondition: false }
  ]
};

export const SEASONAL_EVENTS: Record<Season['name'], SeasonalEvent[]> = {
  spring: [
    { description: 'Flooding washes away an important landmark' },
    { description: 'Mother bird, very protective of her eggs' },
    { description: 'Merchant\'s cart sunken in a pool of mud' },
    { description: 'Migrating butterflies, hungry for nectar' },
    { description: 'Mice weaving wreathes of flowers to prepare for...' },
    { description: 'Wedding festival, a joyous procession' }
  ],
  summer: [
    { description: 'Heat wave makes travel exhausting for next week', effect: 'All travel requires STR save for a week' },
    { description: 'Baby bird, fallen from nest' },
    { description: 'Pleasant and refreshing sun shower' },
    { description: 'Swarm of locusts destroy a settlement\'s crops' },
    { description: 'Mice building elaborate costumes to prepare for...' },
    { description: 'Midsummer festival, a wild dance' }
  ],
  autumn: [
    { description: 'An important tree is felled by wild winds' },
    { description: 'Mother bird, distraught from children leaving home' },
    { description: 'A large patch of mushrooms emerges overnight' },
    { description: 'Rumors that truffles are growing nearby' },
    { description: 'Mice carrying bundles of grain and baking pies for...' },
    { description: 'Harvest festival, a grand feast' }
  ],
  winter: [
    { description: 'Snow prevents above-ground movement for a week', effect: 'No overland travel for a week' },
    { description: 'Bird with a broken wing, old and grey' },
    { description: 'Lost migrating duck, separated by the flock' },
    { description: 'Travellers disappear in a fast moving storm' },
    { description: 'Mice building an effigy of old Winter to prepare for...' },
    { description: 'Midwinter festival, a magnificent bonfire' }
  ]
};

export type RestType = 'short' | 'long' | 'full';

export interface RestResult {
  type: RestType;
  hpHealed: number;
  attributeHealed?: { attribute: 'str' | 'dex' | 'wil'; amount: number };
  conditionsCleared: string[];
  timeTaken: string;
}

export interface EncounterCheck {
  timeScale: TimeScale;
  location: 'dungeon' | 'wilderness';
  shouldRoll: boolean;
  frequency: number; //Every N turns
}

export const ENCOUNTER_FREQUENCIES: Record<string, EncounterCheck> = {
  dungeonExploration: {
    timeScale: 'turn',
    location: 'dungeon',
    shouldRoll: true,
    frequency: 3 // every 3 turns
  },
  wildernessTravel: {
    timeScale: 'watch',
    location: 'wilderness',
    shouldRoll: true,
    frequency: 2 // Morning and evening
  }
};

export interface FatigueState {
  hasRestedToday: boolean;
  consecutiveDaysWithoutRest: number;
  isExhausted: boolean;
}

export interface TravelHazard {
  name: string;
  description: string;
  saveType: 'str' | 'dex' | 'wil';
  difficulty: number;
  consequence: string;
  isDifficultTerrain?: boolean;
}
