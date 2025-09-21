import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SettlementWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SettlementWhereInputObjectSchema).optional().nullable()
}).strict();
export const SettlementNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SettlementNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SettlementNullableScalarRelationFilter>;
export const SettlementNullableScalarRelationFilterObjectZodSchema = makeSchema();
