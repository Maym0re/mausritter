import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GameTimeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => GameTimeWhereInputObjectSchema).optional().nullable()
}).strict();
export const GameTimeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GameTimeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeNullableScalarRelationFilter>;
export const GameTimeNullableScalarRelationFilterObjectZodSchema = makeSchema();
