import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema } from './CampaignCreateNestedOneWithoutDiceRollsInput.schema';
import { DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema),
  entries: z.lazy(() => DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateWithoutUserInput>;
export const DiceRollLogCreateWithoutUserInputObjectZodSchema = makeSchema();
