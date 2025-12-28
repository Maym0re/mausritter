import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterScalarRelationFilterObjectSchema: z.ZodType<Prisma.CharacterScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CharacterScalarRelationFilter>;
export const CharacterScalarRelationFilterObjectZodSchema = makeSchema();
