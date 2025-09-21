import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSettlementSizeFilterObjectSchema } from './NestedEnumSettlementSizeFilter.schema'

const nestedenumsettlementsizewithaggregatesfilterSchema = z.object({
  equals: SettlementSizeSchema.optional(),
  in: SettlementSizeSchema.array().optional(),
  notIn: SettlementSizeSchema.array().optional(),
  not: z.union([SettlementSizeSchema, z.lazy(() => NestedEnumSettlementSizeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSettlementSizeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSettlementSizeWithAggregatesFilter> = nestedenumsettlementsizewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSettlementSizeWithAggregatesFilter>;
export const NestedEnumSettlementSizeWithAggregatesFilterObjectZodSchema = nestedenumsettlementsizewithaggregatesfilterSchema;
