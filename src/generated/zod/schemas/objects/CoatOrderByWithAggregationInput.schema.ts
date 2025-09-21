import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CoatCountOrderByAggregateInputObjectSchema } from './CoatCountOrderByAggregateInput.schema';
import { CoatMaxOrderByAggregateInputObjectSchema } from './CoatMaxOrderByAggregateInput.schema';
import { CoatMinOrderByAggregateInputObjectSchema } from './CoatMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  pattern: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CoatCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CoatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CoatMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CoatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CoatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatOrderByWithAggregationInput>;
export const CoatOrderByWithAggregationInputObjectZodSchema = makeSchema();
