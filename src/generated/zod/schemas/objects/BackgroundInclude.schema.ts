import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { BackgroundCountOutputTypeArgsObjectSchema as BackgroundCountOutputTypeArgsObjectSchema } from './BackgroundCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BackgroundCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BackgroundIncludeObjectSchema: z.ZodType<Prisma.BackgroundInclude> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundInclude>;
export const BackgroundIncludeObjectZodSchema = makeSchema();
