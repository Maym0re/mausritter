import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MapImageCountOrderByAggregateInputObjectSchema as MapImageCountOrderByAggregateInputObjectSchema } from './MapImageCountOrderByAggregateInput.schema';
import { MapImageAvgOrderByAggregateInputObjectSchema as MapImageAvgOrderByAggregateInputObjectSchema } from './MapImageAvgOrderByAggregateInput.schema';
import { MapImageMaxOrderByAggregateInputObjectSchema as MapImageMaxOrderByAggregateInputObjectSchema } from './MapImageMaxOrderByAggregateInput.schema';
import { MapImageMinOrderByAggregateInputObjectSchema as MapImageMinOrderByAggregateInputObjectSchema } from './MapImageMinOrderByAggregateInput.schema';
import { MapImageSumOrderByAggregateInputObjectSchema as MapImageSumOrderByAggregateInputObjectSchema } from './MapImageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MapImageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MapImageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MapImageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MapImageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MapImageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MapImageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MapImageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageOrderByWithAggregationInput>;
export const MapImageOrderByWithAggregationInputObjectZodSchema = makeSchema();
