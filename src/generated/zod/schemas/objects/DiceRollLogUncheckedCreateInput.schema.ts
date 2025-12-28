import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema as DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  userId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  entries: z.lazy(() => DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedCreateInput>;
export const DiceRollLogUncheckedCreateInputObjectZodSchema = makeSchema();
