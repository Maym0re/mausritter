import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BackgroundCountOrderByAggregateInputObjectSchema } from './BackgroundCountOrderByAggregateInput.schema';
import { BackgroundMaxOrderByAggregateInputObjectSchema } from './BackgroundMaxOrderByAggregateInput.schema';
import { BackgroundMinOrderByAggregateInputObjectSchema } from './BackgroundMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  itemA: SortOrderSchema.optional(),
  itemB: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BackgroundCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BackgroundMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BackgroundMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BackgroundOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BackgroundOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundOrderByWithAggregationInput>;
export const BackgroundOrderByWithAggregationInputObjectZodSchema = makeSchema();
