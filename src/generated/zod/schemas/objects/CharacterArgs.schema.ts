import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './CharacterInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CharacterSelectObjectSchema).optional(),
  include: z.lazy(() => CharacterIncludeObjectSchema).optional()
}).strict();
export const CharacterArgsObjectSchema = makeSchema();
export const CharacterArgsObjectZodSchema = makeSchema();
