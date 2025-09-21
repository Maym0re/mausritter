import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MapMarkerCountOrderByAggregateInputObjectSchema } from './MapMarkerCountOrderByAggregateInput.schema';
import { MapMarkerAvgOrderByAggregateInputObjectSchema } from './MapMarkerAvgOrderByAggregateInput.schema';
import { MapMarkerMaxOrderByAggregateInputObjectSchema } from './MapMarkerMaxOrderByAggregateInput.schema';
import { MapMarkerMinOrderByAggregateInputObjectSchema } from './MapMarkerMinOrderByAggregateInput.schema';
import { MapMarkerSumOrderByAggregateInputObjectSchema } from './MapMarkerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  x: SortOrderSchema.optional(),
  y: SortOrderSchema.optional(),
  z: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MapMarkerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MapMarkerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MapMarkerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MapMarkerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MapMarkerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MapMarkerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MapMarkerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerOrderByWithAggregationInput>;
export const MapMarkerOrderByWithAggregationInputObjectZodSchema = makeSchema();
