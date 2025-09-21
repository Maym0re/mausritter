import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  entries: z.lazy(() => DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedCreateWithoutCampaignInput>;
export const DiceRollLogUncheckedCreateWithoutCampaignInputObjectZodSchema = makeSchema();
