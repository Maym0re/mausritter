import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InventoryItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemOrderByRelationAggregateInput>;
export const InventoryItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
