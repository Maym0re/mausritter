import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LandmarkDetailCountOrderByAggregateInputObjectSchema } from './LandmarkDetailCountOrderByAggregateInput.schema';
import { LandmarkDetailMaxOrderByAggregateInputObjectSchema } from './LandmarkDetailMaxOrderByAggregateInput.schema';
import { LandmarkDetailMinOrderByAggregateInputObjectSchema } from './LandmarkDetailMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  landmarkId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => LandmarkDetailCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LandmarkDetailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LandmarkDetailMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LandmarkDetailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LandmarkDetailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailOrderByWithAggregationInput>;
export const LandmarkDetailOrderByWithAggregationInputObjectZodSchema = makeSchema();
