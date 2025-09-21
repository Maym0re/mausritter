import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCountOutputTypeSelectObjectSchema } from './DiceRollLogCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DiceRollLogCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DiceRollLogCountOutputTypeArgsObjectSchema = makeSchema();
export const DiceRollLogCountOutputTypeArgsObjectZodSchema = makeSchema();
