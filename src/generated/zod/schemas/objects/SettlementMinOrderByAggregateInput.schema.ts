import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  governance: SortOrderSchema.optional(),
  inhabitants: SortOrderSchema.optional(),
  feature: SortOrderSchema.optional(),
  industry: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  population: SortOrderSchema.optional()
}).strict();
export const SettlementMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettlementMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementMinOrderByAggregateInput>;
export const SettlementMinOrderByAggregateInputObjectZodSchema = makeSchema();
