import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema } from '../findManyCharacter.schema';
import { CoatCountOutputTypeArgsObjectSchema } from './CoatCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  color: z.boolean().optional(),
  pattern: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CoatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CoatSelectObjectSchema: z.ZodType<Prisma.CoatSelect> = makeSchema() as unknown as z.ZodType<Prisma.CoatSelect>;
export const CoatSelectObjectZodSchema = makeSchema();
