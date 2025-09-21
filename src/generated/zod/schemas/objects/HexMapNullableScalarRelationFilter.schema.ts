import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => HexMapWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => HexMapWhereInputObjectSchema).optional().nullable()
}).strict();
export const HexMapNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.HexMapNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HexMapNullableScalarRelationFilter>;
export const HexMapNullableScalarRelationFilterObjectZodSchema = makeSchema();
