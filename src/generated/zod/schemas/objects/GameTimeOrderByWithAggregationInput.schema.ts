import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GameTimeCountOrderByAggregateInputObjectSchema as GameTimeCountOrderByAggregateInputObjectSchema } from './GameTimeCountOrderByAggregateInput.schema';
import { GameTimeAvgOrderByAggregateInputObjectSchema as GameTimeAvgOrderByAggregateInputObjectSchema } from './GameTimeAvgOrderByAggregateInput.schema';
import { GameTimeMaxOrderByAggregateInputObjectSchema as GameTimeMaxOrderByAggregateInputObjectSchema } from './GameTimeMaxOrderByAggregateInput.schema';
import { GameTimeMinOrderByAggregateInputObjectSchema as GameTimeMinOrderByAggregateInputObjectSchema } from './GameTimeMinOrderByAggregateInput.schema';
import { GameTimeSumOrderByAggregateInputObjectSchema as GameTimeSumOrderByAggregateInputObjectSchema } from './GameTimeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  rounds: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  watches: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GameTimeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GameTimeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GameTimeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GameTimeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GameTimeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GameTimeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GameTimeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeOrderByWithAggregationInput>;
export const GameTimeOrderByWithAggregationInputObjectZodSchema = makeSchema();
