import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema } from '../findManyCharacter.schema';
import { BackgroundCountOutputTypeArgsObjectSchema } from './BackgroundCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  itemA: z.boolean().optional(),
  itemB: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => BackgroundCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BackgroundSelectObjectSchema: z.ZodType<Prisma.BackgroundSelect> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundSelect>;
export const BackgroundSelectObjectZodSchema = makeSchema();
