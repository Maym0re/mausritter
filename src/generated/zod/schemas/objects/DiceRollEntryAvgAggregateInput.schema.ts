import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  sides: z.literal(true).optional()
}).strict();
export const DiceRollEntryAvgAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryAvgAggregateInputType>;
export const DiceRollEntryAvgAggregateInputObjectZodSchema = makeSchema();
