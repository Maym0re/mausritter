import * as z from 'zod';
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
export const DiceRollEntryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryMaxOrderByAggregateInput>;
export const DiceRollEntryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
