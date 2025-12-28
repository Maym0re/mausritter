import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InventoryItemCountOrderByAggregateInputObjectSchema as InventoryItemCountOrderByAggregateInputObjectSchema } from './InventoryItemCountOrderByAggregateInput.schema';
import { InventoryItemAvgOrderByAggregateInputObjectSchema as InventoryItemAvgOrderByAggregateInputObjectSchema } from './InventoryItemAvgOrderByAggregateInput.schema';
import { InventoryItemMaxOrderByAggregateInputObjectSchema as InventoryItemMaxOrderByAggregateInputObjectSchema } from './InventoryItemMaxOrderByAggregateInput.schema';
import { InventoryItemMinOrderByAggregateInputObjectSchema as InventoryItemMinOrderByAggregateInputObjectSchema } from './InventoryItemMinOrderByAggregateInput.schema';
import { InventoryItemSumOrderByAggregateInputObjectSchema as InventoryItemSumOrderByAggregateInputObjectSchema } from './InventoryItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  usage: SortOrderSchema.optional(),
  maxUsage: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slotType: SortOrderSchema.optional(),
  slotIndex: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => InventoryItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => InventoryItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InventoryItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InventoryItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => InventoryItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InventoryItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InventoryItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemOrderByWithAggregationInput>;
export const InventoryItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
