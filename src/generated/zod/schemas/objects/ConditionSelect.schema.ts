import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { ConditionCountOutputTypeArgsObjectSchema as ConditionCountOutputTypeArgsObjectSchema } from './ConditionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  clearRequirement: z.boolean().optional(),
  effects: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConditionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConditionSelectObjectSchema: z.ZodType<Prisma.ConditionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConditionSelect>;
export const ConditionSelectObjectZodSchema = makeSchema();
