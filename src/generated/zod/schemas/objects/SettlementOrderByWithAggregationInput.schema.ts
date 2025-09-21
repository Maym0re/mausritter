import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SettlementCountOrderByAggregateInputObjectSchema } from './SettlementCountOrderByAggregateInput.schema';
import { SettlementAvgOrderByAggregateInputObjectSchema } from './SettlementAvgOrderByAggregateInput.schema';
import { SettlementMaxOrderByAggregateInputObjectSchema } from './SettlementMaxOrderByAggregateInput.schema';
import { SettlementMinOrderByAggregateInputObjectSchema } from './SettlementMinOrderByAggregateInput.schema';
import { SettlementSumOrderByAggregateInputObjectSchema } from './SettlementSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  governance: SortOrderSchema.optional(),
  inhabitants: SortOrderSchema.optional(),
  feature: SortOrderSchema.optional(),
  industry: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  population: SortOrderSchema.optional(),
  _count: z.lazy(() => SettlementCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SettlementAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SettlementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SettlementMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SettlementSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SettlementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SettlementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementOrderByWithAggregationInput>;
export const SettlementOrderByWithAggregationInputObjectZodSchema = makeSchema();
