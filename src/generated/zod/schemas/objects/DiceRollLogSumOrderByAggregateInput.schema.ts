import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  total: SortOrderSchema.optional()
}).strict();
export const DiceRollLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogSumOrderByAggregateInput>;
export const DiceRollLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
