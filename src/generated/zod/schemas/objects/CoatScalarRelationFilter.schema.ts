import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './CoatWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CoatWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CoatWhereInputObjectSchema).optional()
}).strict();
export const CoatScalarRelationFilterObjectSchema: z.ZodType<Prisma.CoatScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CoatScalarRelationFilter>;
export const CoatScalarRelationFilterObjectZodSchema = makeSchema();
