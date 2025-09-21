import { z } from 'zod';

// Enums
export const SeasonNameSchema = z.enum(['spring', 'summer', 'autumn', 'winter']);
export type SeasonName = z.infer<typeof SeasonNameSchema>;

export const TimeScaleSchema = z.enum(['round', 'turn', 'watch']);
export type TimeScale = z.infer<typeof TimeScaleSchema>;

export const RestTypeSchema = z.enum(['short', 'long', 'full']);
export type RestType = z.infer<typeof RestTypeSchema>;

// Core schemas
export const GameTimeCoreSchema = z.object({
  rounds: z.number().int().min(0),
  turns: z.number().int().min(0),
  watches: z.number().int().min(0),
  days: z.number().int().min(0)
}).strict();
export type GameTimeCore = z.infer<typeof GameTimeCoreSchema>;

export const WeatherEntryLightSchema = z.object({
  roll: z.number().int().min(2).max(12),
  weather: z.string(),
  isPoorCondition: z.boolean()
}).strict();
export type WeatherEntryLight = z.infer<typeof WeatherEntryLightSchema>;

export const SeasonalEventSchema = z.object({
  description: z.string(),
  effect: z.string().optional()
}).strict();
export type SeasonalEvent = z.infer<typeof SeasonalEventSchema>;

export const SeasonSchema = z.object({
  name: SeasonNameSchema,
  weatherTable: z.array(WeatherEntryLightSchema),
  events: z.array(SeasonalEventSchema)
}).strict();
export type Season = z.infer<typeof SeasonSchema>;

export const TravelStateSchema = z.object({
  currentHex: z.string(),
  destination: z.string().optional(),
  watchesInCurrentHex: z.number().int().min(0),
  hasRested: z.boolean(),
  weatherToday: z.string(),
  isPoorWeather: z.boolean()
}).strict();
export type TravelState = z.infer<typeof TravelStateSchema>;

export const RestResultSchema = z.object({
  type: RestTypeSchema,
  hpHealed: z.number().int().min(0),
  attributeHealed: z.object({
    attribute: z.enum(['str', 'dex', 'wil']),
    amount: z.number().int().min(0)
  }).optional(),
  conditionsCleared: z.array(z.string()),
  timeTaken: z.string()
}).strict();
export type RestResult = z.infer<typeof RestResultSchema>;

export const EncounterCheckSchema = z.object({
  timeScale: TimeScaleSchema,
  location: z.enum(['dungeon', 'wilderness']),
  shouldRoll: z.boolean(),
  frequency: z.number().int().min(1)
}).strict();
export type EncounterCheck = z.infer<typeof EncounterCheckSchema>;

export const TravelHazardSchema = z.object({
  name: z.string(),
  description: z.string(),
  saveType: z.enum(['str', 'dex', 'wil']),
  difficulty: z.number().int().min(1),
  consequence: z.string(),
  isDifficultTerrain: z.boolean().optional()
}).strict();
export type TravelHazard = z.infer<typeof TravelHazardSchema>;

// Data tables (constants remain plain JS, inferred via satisfies for type safety)
export const WEATHER_TABLES: Record<SeasonName, WeatherEntryLight[]> = {
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
} as const;

export const SEASONAL_EVENTS: Record<SeasonName, SeasonalEvent[]> = {
  spring: [
    { description: 'Flooding washes away an important landmark' },
    { description: 'Mother bird, very protective of her eggs' },
    { description: "Merchant's cart sunken in a pool of mud" },
    { description: 'Migrating butterflies, hungry for nectar' },
    { description: 'Mice weaving wreathes of flowers to prepare for...' },
    { description: 'Wedding festival, a joyous procession' }
  ],
  summer: [
    { description: 'Heat wave makes travel exhausting for next week', effect: 'All travel requires STR save for a week' },
    { description: 'Baby bird, fallen from nest' },
    { description: 'Pleasant and refreshing sun shower' },
    { description: "Swarm of locusts destroy a settlement's crops" },
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
} as const;

export const ENCOUNTER_FREQUENCIES: Record<string, EncounterCheck> = {
	dungeonExploration: {
		timeScale: 'turn',
		location: 'dungeon',
		shouldRoll: true,
		frequency: 3
	},
	wildernessTravel: {
		timeScale: 'watch',
		location: 'wilderness',
		shouldRoll: true,
		frequency: 2
	}
}