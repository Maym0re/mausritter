import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  rounds: z.literal(true).optional(),
  turns: z.literal(true).optional(),
  watches: z.literal(true).optional(),
  days: z.literal(true).optional()
}).strict();
export const GameTimeAvgAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeAvgAggregateInputType>;
export const GameTimeAvgAggregateInputObjectZodSchema = makeSchema();
