import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  sides: SortOrderSchema.optional()
}).strict();
export const DiceRollEntrySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntrySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntrySumOrderByAggregateInput>;
export const DiceRollEntrySumOrderByAggregateInputObjectZodSchema = makeSchema();
