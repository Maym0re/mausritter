import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { NestedEnumSettlementSizeWithAggregatesFilterObjectSchema as NestedEnumSettlementSizeWithAggregatesFilterObjectSchema } from './NestedEnumSettlementSizeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSettlementSizeFilterObjectSchema as NestedEnumSettlementSizeFilterObjectSchema } from './NestedEnumSettlementSizeFilter.schema'

const makeSchema = () => z.object({
  equals: SettlementSizeSchema.optional(),
  in: SettlementSizeSchema.array().optional(),
  notIn: SettlementSizeSchema.array().optional(),
  not: z.union([SettlementSizeSchema, z.lazy(() => NestedEnumSettlementSizeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema).optional()
}).strict();
export const EnumSettlementSizeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSettlementSizeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSettlementSizeWithAggregatesFilter>;
export const EnumSettlementSizeWithAggregatesFilterObjectZodSchema = makeSchema();
