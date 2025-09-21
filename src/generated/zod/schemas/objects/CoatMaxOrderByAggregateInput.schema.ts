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
export const CoatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoatMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatMaxOrderByAggregateInput>;
export const CoatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
