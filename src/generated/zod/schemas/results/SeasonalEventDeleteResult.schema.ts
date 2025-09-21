import { z } from 'zod';
export const SeasonalEventDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  season: z.unknown(),
  description: z.string(),
  effect: z.string().optional()
}));