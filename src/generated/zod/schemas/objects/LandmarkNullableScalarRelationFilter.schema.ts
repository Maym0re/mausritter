import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LandmarkWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => LandmarkWhereInputObjectSchema).optional().nullable()
}).strict();
export const LandmarkNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.LandmarkNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkNullableScalarRelationFilter>;
export const LandmarkNullableScalarRelationFilterObjectZodSchema = makeSchema();
