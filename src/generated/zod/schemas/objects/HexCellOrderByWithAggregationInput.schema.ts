import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HexCellCountOrderByAggregateInputObjectSchema as HexCellCountOrderByAggregateInputObjectSchema } from './HexCellCountOrderByAggregateInput.schema';
import { HexCellAvgOrderByAggregateInputObjectSchema as HexCellAvgOrderByAggregateInputObjectSchema } from './HexCellAvgOrderByAggregateInput.schema';
import { HexCellMaxOrderByAggregateInputObjectSchema as HexCellMaxOrderByAggregateInputObjectSchema } from './HexCellMaxOrderByAggregateInput.schema';
import { HexCellMinOrderByAggregateInputObjectSchema as HexCellMinOrderByAggregateInputObjectSchema } from './HexCellMinOrderByAggregateInput.schema';
import { HexCellSumOrderByAggregateInputObjectSchema as HexCellSumOrderByAggregateInputObjectSchema } from './HexCellSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  q: SortOrderSchema.optional(),
  r: SortOrderSchema.optional(),
  s: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional(),
  landmarkId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  landmarkDetailId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  settlementId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isRevealed: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  customName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  masterNotes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => HexCellCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => HexCellAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HexCellMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HexCellMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => HexCellSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HexCellOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HexCellOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellOrderByWithAggregationInput>;
export const HexCellOrderByWithAggregationInputObjectZodSchema = makeSchema();
