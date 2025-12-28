import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { BirthsignCountOutputTypeArgsObjectSchema as BirthsignCountOutputTypeArgsObjectSchema } from './BirthsignCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BirthsignCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BirthsignIncludeObjectSchema: z.ZodType<Prisma.BirthsignInclude> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignInclude>;
export const BirthsignIncludeObjectZodSchema = makeSchema();
