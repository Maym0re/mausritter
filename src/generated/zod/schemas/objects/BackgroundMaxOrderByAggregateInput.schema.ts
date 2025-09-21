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
export const BackgroundMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BackgroundMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundMaxOrderByAggregateInput>;
export const BackgroundMaxOrderByAggregateInputObjectZodSchema = makeSchema();
