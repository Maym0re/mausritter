import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './BirthsignWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BirthsignWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BirthsignWhereInputObjectSchema).optional()
}).strict();
export const BirthsignScalarRelationFilterObjectSchema: z.ZodType<Prisma.BirthsignScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignScalarRelationFilter>;
export const BirthsignScalarRelationFilterObjectZodSchema = makeSchema();
