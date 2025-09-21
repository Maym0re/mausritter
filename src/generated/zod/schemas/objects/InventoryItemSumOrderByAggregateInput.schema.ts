import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional(),
  usage: SortOrderSchema.optional(),
  maxUsage: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  slotIndex: SortOrderSchema.optional()
}).strict();
export const InventoryItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemSumOrderByAggregateInput>;
export const InventoryItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
