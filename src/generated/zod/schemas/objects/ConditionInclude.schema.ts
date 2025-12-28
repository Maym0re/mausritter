import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema as CharacterFindManySchema } from '../findManyCharacter.schema';
import { ConditionCountOutputTypeArgsObjectSchema as ConditionCountOutputTypeArgsObjectSchema } from './ConditionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConditionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConditionIncludeObjectSchema: z.ZodType<Prisma.ConditionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConditionInclude>;
export const ConditionIncludeObjectZodSchema = makeSchema();
