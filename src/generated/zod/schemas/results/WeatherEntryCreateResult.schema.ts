import * as z from 'zod';
export const WeatherEntryCreateResultSchema = z.object({
  id: z.string(),
  season: z.unknown(),
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean(),
  Campaign: z.array(z.unknown())
});