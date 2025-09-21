import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema'

const nestedenumsettlementsizefilterSchema = z.object({
  equals: SettlementSizeSchema.optional(),
  in: SettlementSizeSchema.array().optional(),
  notIn: SettlementSizeSchema.array().optional(),
  not: z.union([SettlementSizeSchema, z.lazy(() => NestedEnumSettlementSizeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSettlementSizeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSettlementSizeFilter> = nestedenumsettlementsizefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSettlementSizeFilter>;
export const NestedEnumSettlementSizeFilterObjectZodSchema = nestedenumsettlementsizefilterSchema;
