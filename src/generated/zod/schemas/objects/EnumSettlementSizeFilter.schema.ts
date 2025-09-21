import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { NestedEnumSettlementSizeFilterObjectSchema } from './NestedEnumSettlementSizeFilter.schema'

const makeSchema = () => z.object({
  equals: SettlementSizeSchema.optional(),
  in: SettlementSizeSchema.array().optional(),
  notIn: SettlementSizeSchema.array().optional(),
  not: z.union([SettlementSizeSchema, z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema)]).optional()
}).strict();
export const EnumSettlementSizeFilterObjectSchema: z.ZodType<Prisma.EnumSettlementSizeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSettlementSizeFilter>;
export const EnumSettlementSizeFilterObjectZodSchema = makeSchema();
