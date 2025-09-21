import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateNestedOneWithoutEntriesInputObjectSchema } from './DiceRollLogCreateNestedOneWithoutEntriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int(),
  type: z.string(),
  value: z.number().int(),
  sides: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  log: z.lazy(() => DiceRollLogCreateNestedOneWithoutEntriesInputObjectSchema)
}).strict();
export const DiceRollEntryCreateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateInput>;
export const DiceRollEntryCreateInputObjectZodSchema = makeSchema();
