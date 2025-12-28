import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  season: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional()
}).strict();
export const SeasonalEventMinAggregateInputObjectSchema: z.ZodType<Prisma.SeasonalEventMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventMinAggregateInputType>;
export const SeasonalEventMinAggregateInputObjectZodSchema = makeSchema();
