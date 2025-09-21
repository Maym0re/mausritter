import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  size: z.literal(true).optional(),
  usage: z.literal(true).optional(),
  maxUsage: z.literal(true).optional(),
  description: z.literal(true).optional(),
  value: z.literal(true).optional(),
  slotType: z.literal(true).optional(),
  slotIndex: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const InventoryItemCountAggregateInputObjectSchema: z.ZodType<Prisma.InventoryItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCountAggregateInputType>;
export const InventoryItemCountAggregateInputObjectZodSchema = makeSchema();
