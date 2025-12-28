import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DiceRollEntryCountOrderByAggregateInputObjectSchema as DiceRollEntryCountOrderByAggregateInputObjectSchema } from './DiceRollEntryCountOrderByAggregateInput.schema';
import { DiceRollEntryAvgOrderByAggregateInputObjectSchema as DiceRollEntryAvgOrderByAggregateInputObjectSchema } from './DiceRollEntryAvgOrderByAggregateInput.schema';
import { DiceRollEntryMaxOrderByAggregateInputObjectSchema as DiceRollEntryMaxOrderByAggregateInputObjectSchema } from './DiceRollEntryMaxOrderByAggregateInput.schema';
import { DiceRollEntryMinOrderByAggregateInputObjectSchema as DiceRollEntryMinOrderByAggregateInputObjectSchema } from './DiceRollEntryMinOrderByAggregateInput.schema';
import { DiceRollEntrySumOrderByAggregateInputObjectSchema as DiceRollEntrySumOrderByAggregateInputObjectSchema } from './DiceRollEntrySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  logId: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  sides: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DiceRollEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DiceRollEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DiceRollEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DiceRollEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DiceRollEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DiceRollEntryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DiceRollEntryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryOrderByWithAggregationInput>;
export const DiceRollEntryOrderByWithAggregationInputObjectZodSchema = makeSchema();
