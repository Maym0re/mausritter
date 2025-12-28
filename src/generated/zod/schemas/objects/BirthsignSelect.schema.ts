import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { BirthsignCountOutputTypeArgsObjectSchema as BirthsignCountOutputTypeArgsObjectSchema } from './BirthsignCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sign: z.boolean().optional(),
  disposition: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => BirthsignCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BirthsignSelectObjectSchema: z.ZodType<Prisma.BirthsignSelect> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignSelect>;
export const BirthsignSelectObjectZodSchema = makeSchema();
