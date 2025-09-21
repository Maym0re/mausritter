import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  itemA: SortOrderSchema.optional(),
  itemB: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BackgroundMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BackgroundMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundMinOrderByAggregateInput>;
export const BackgroundMinOrderByAggregateInputObjectZodSchema = makeSchema();
