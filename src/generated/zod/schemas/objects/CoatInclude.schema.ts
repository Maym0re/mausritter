import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { CoatCountOutputTypeArgsObjectSchema as CoatCountOutputTypeArgsObjectSchema } from './CoatCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CoatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CoatIncludeObjectSchema: z.ZodType<Prisma.CoatInclude> = makeSchema() as unknown as z.ZodType<Prisma.CoatInclude>;
export const CoatIncludeObjectZodSchema = makeSchema();
