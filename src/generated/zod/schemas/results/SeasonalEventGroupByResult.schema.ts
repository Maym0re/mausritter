import { z } from 'zod';
export const SeasonalEventGroupByResultSchema = z.array(z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string(),
  _count: z.object({
    id: z.number(),
    season: z.number(),
    description: z.number(),
    effect: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    effect: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    effect: z.string().nullable()
  }).nullable().optional()
}));