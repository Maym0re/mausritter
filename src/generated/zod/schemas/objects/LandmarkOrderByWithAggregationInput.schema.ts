import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LandmarkCountOrderByAggregateInputObjectSchema as LandmarkCountOrderByAggregateInputObjectSchema } from './LandmarkCountOrderByAggregateInput.schema';
import { LandmarkMaxOrderByAggregateInputObjectSchema as LandmarkMaxOrderByAggregateInputObjectSchema } from './LandmarkMaxOrderByAggregateInput.schema';
import { LandmarkMinOrderByAggregateInputObjectSchema as LandmarkMinOrderByAggregateInputObjectSchema } from './LandmarkMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional(),
  _count: z.lazy(() => LandmarkCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LandmarkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LandmarkMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LandmarkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LandmarkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkOrderByWithAggregationInput>;
export const LandmarkOrderByWithAggregationInputObjectZodSchema = makeSchema();
