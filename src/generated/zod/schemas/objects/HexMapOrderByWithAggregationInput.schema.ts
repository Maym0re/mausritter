import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HexMapCountOrderByAggregateInputObjectSchema as HexMapCountOrderByAggregateInputObjectSchema } from './HexMapCountOrderByAggregateInput.schema';
import { HexMapAvgOrderByAggregateInputObjectSchema as HexMapAvgOrderByAggregateInputObjectSchema } from './HexMapAvgOrderByAggregateInput.schema';
import { HexMapMaxOrderByAggregateInputObjectSchema as HexMapMaxOrderByAggregateInputObjectSchema } from './HexMapMaxOrderByAggregateInput.schema';
import { HexMapMinOrderByAggregateInputObjectSchema as HexMapMinOrderByAggregateInputObjectSchema } from './HexMapMinOrderByAggregateInput.schema';
import { HexMapSumOrderByAggregateInputObjectSchema as HexMapSumOrderByAggregateInputObjectSchema } from './HexMapSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  centerX: SortOrderSchema.optional(),
  centerY: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => HexMapCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => HexMapAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HexMapMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HexMapMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => HexMapSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HexMapOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HexMapOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapOrderByWithAggregationInput>;
export const HexMapOrderByWithAggregationInputObjectZodSchema = makeSchema();
