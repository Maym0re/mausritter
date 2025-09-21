import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  pattern: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CoatMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoatMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatMinOrderByAggregateInput>;
export const CoatMinOrderByAggregateInputObjectZodSchema = makeSchema();
