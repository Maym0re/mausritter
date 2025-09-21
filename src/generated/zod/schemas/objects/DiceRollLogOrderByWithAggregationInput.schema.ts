import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DiceRollLogCountOrderByAggregateInputObjectSchema } from './DiceRollLogCountOrderByAggregateInput.schema';
import { DiceRollLogAvgOrderByAggregateInputObjectSchema } from './DiceRollLogAvgOrderByAggregateInput.schema';
import { DiceRollLogMaxOrderByAggregateInputObjectSchema } from './DiceRollLogMaxOrderByAggregateInput.schema';
import { DiceRollLogMinOrderByAggregateInputObjectSchema } from './DiceRollLogMinOrderByAggregateInput.schema';
import { DiceRollLogSumOrderByAggregateInputObjectSchema } from './DiceRollLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notation: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DiceRollLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DiceRollLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DiceRollLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DiceRollLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DiceRollLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DiceRollLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DiceRollLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogOrderByWithAggregationInput>;
export const DiceRollLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
