import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional().nullable()
}).strict();
export const LandmarkDetailNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.LandmarkDetailNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailNullableScalarRelationFilter>;
export const LandmarkDetailNullableScalarRelationFilterObjectZodSchema = makeSchema();
