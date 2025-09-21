import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConditionCountOrderByAggregateInputObjectSchema } from './ConditionCountOrderByAggregateInput.schema';
import { ConditionMaxOrderByAggregateInputObjectSchema } from './ConditionMaxOrderByAggregateInput.schema';
import { ConditionMinOrderByAggregateInputObjectSchema } from './ConditionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  clearRequirement: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effects: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ConditionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ConditionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ConditionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConditionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConditionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionOrderByWithAggregationInput>;
export const ConditionOrderByWithAggregationInputObjectZodSchema = makeSchema();
