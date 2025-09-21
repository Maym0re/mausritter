import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundWhereInputObjectSchema } from './BackgroundWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BackgroundWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BackgroundWhereInputObjectSchema).optional()
}).strict();
export const BackgroundScalarRelationFilterObjectSchema: z.ZodType<Prisma.BackgroundScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundScalarRelationFilter>;
export const BackgroundScalarRelationFilterObjectZodSchema = makeSchema();
