import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterListRelationFilterObjectSchema: z.ZodType<Prisma.CharacterListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CharacterListRelationFilter>;
export const CharacterListRelationFilterObjectZodSchema = makeSchema();
