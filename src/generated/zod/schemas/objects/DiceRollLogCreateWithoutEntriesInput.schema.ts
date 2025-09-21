import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema } from './CampaignCreateNestedOneWithoutDiceRollsInput.schema';
import { UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema } from './UserCreateNestedOneWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema)
}).strict();
export const DiceRollLogCreateWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateWithoutEntriesInput>;
export const DiceRollLogCreateWithoutEntriesInputObjectZodSchema = makeSchema();
