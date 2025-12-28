import * as z from 'zod';
export const SeasonalEventUpsertResultSchema = z.object({
  id: z.string(),
  season: z.unknown(),
  description: z.string(),
  effect: z.string().optional()
});