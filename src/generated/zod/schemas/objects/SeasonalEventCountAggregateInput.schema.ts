import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SeasonalEventCountAggregateInputObjectSchema: z.ZodType<Prisma.SeasonalEventCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventCountAggregateInputType>;
export const SeasonalEventCountAggregateInputObjectZodSchema = makeSchema();
