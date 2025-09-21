import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  sides: z.literal(true).optional()
}).strict();
export const DiceRollEntrySumAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntrySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntrySumAggregateInputType>;
export const DiceRollEntrySumAggregateInputObjectZodSchema = makeSchema();
