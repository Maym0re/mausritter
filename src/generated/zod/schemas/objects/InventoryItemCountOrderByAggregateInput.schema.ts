import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  usage: SortOrderSchema.optional(),
  maxUsage: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  slotType: SortOrderSchema.optional(),
  slotIndex: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const InventoryItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCountOrderByAggregateInput>;
export const InventoryItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
