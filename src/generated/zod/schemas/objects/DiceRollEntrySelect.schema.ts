import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogArgsObjectSchema } from './DiceRollLogArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  logId: z.boolean().optional(),
  log: z.union([z.boolean(), z.lazy(() => DiceRollLogArgsObjectSchema)]).optional(),
  order: z.boolean().optional(),
  type: z.boolean().optional(),
  value: z.boolean().optional(),
  sides: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const DiceRollEntrySelectObjectSchema: z.ZodType<Prisma.DiceRollEntrySelect> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntrySelect>;
export const DiceRollEntrySelectObjectZodSchema = makeSchema();
