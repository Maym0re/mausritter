import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogSelectObjectSchema } from './DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './DiceRollLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DiceRollLogSelectObjectSchema).optional(),
  include: z.lazy(() => DiceRollLogIncludeObjectSchema).optional()
}).strict();
export const DiceRollLogArgsObjectSchema = makeSchema();
export const DiceRollLogArgsObjectZodSchema = makeSchema();
