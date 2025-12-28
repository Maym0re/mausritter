import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional(),
  usage: SortOrderSchema.optional(),
  maxUsage: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  slotIndex: SortOrderSchema.optional()
}).strict();
export const InventoryItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemAvgOrderByAggregateInput>;
export const InventoryItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
