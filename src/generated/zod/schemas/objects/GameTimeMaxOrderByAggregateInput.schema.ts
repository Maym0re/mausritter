import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GameTimeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeMaxOrderByAggregateInput>;
export const GameTimeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
