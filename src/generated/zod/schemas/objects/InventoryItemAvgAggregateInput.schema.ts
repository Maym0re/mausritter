import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional(),
  usage: z.literal(true).optional(),
  maxUsage: z.literal(true).optional(),
  value: z.literal(true).optional(),
  slotIndex: z.literal(true).optional()
}).strict();
export const InventoryItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemAvgAggregateInputType>;
export const InventoryItemAvgAggregateInputObjectZodSchema = makeSchema();
