import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCountOutputTypeSelectObjectSchema as CharacterCountOutputTypeSelectObjectSchema } from './CharacterCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CharacterCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CharacterCountOutputTypeArgsObjectSchema = makeSchema();
export const CharacterCountOutputTypeArgsObjectZodSchema = makeSchema();
