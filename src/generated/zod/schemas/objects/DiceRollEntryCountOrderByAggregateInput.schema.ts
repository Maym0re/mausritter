import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  logId: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  sides: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const DiceRollEntryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCountOrderByAggregateInput>;
export const DiceRollEntryCountOrderByAggregateInputObjectZodSchema = makeSchema();
