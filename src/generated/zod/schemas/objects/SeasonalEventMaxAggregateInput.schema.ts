import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional()
}).strict();
export const SeasonalEventMaxAggregateInputObjectSchema: z.ZodType<Prisma.SeasonalEventMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventMaxAggregateInputType>;
export const SeasonalEventMaxAggregateInputObjectZodSchema = makeSchema();
