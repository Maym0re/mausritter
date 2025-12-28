import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LandmarkDetailCountOrderByAggregateInputObjectSchema as LandmarkDetailCountOrderByAggregateInputObjectSchema } from './LandmarkDetailCountOrderByAggregateInput.schema';
import { LandmarkDetailMaxOrderByAggregateInputObjectSchema as LandmarkDetailMaxOrderByAggregateInputObjectSchema } from './LandmarkDetailMaxOrderByAggregateInput.schema';
import { LandmarkDetailMinOrderByAggregateInputObjectSchema as LandmarkDetailMinOrderByAggregateInputObjectSchema } from './LandmarkDetailMinOrderByAggregateInput.schema'

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
