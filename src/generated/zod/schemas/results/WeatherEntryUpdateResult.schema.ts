import { z } from 'zod';
export const WeatherEntryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  season: z.unknown(),
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean(),
  Campaign: z.array(z.unknown())
}));