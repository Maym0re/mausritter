import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './DiceRollEntryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DiceRollEntrySelectObjectSchema).optional(),
  include: z.lazy(() => DiceRollEntryIncludeObjectSchema).optional()
}).strict();
export const DiceRollEntryArgsObjectSchema = makeSchema();
export const DiceRollEntryArgsObjectZodSchema = makeSchema();
