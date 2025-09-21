import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  entries: z.lazy(() => DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedCreateWithoutUserInput>;
export const DiceRollLogUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
