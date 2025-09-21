import { z } from 'zod';
export const WeatherEntryDeleteManyResultSchema = z.object({
  count: z.number()
});