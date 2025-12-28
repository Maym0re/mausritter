import * as z from 'zod';
export const WeatherEntryCreateManyResultSchema = z.object({
  count: z.number()
});