import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogArgsObjectSchema } from './DiceRollLogArgs.schema'

const makeSchema = () => z.object({
  log: z.union([z.boolean(), z.lazy(() => DiceRollLogArgsObjectSchema)]).optional()
}).strict();
export const DiceRollEntryIncludeObjectSchema: z.ZodType<Prisma.DiceRollEntryInclude> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryInclude>;
export const DiceRollEntryIncludeObjectZodSchema = makeSchema();
