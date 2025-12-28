import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema as UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema } from './UserCreateNestedOneWithoutDiceRollLogsInput.schema';
import { DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema as DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema),
  entries: z.lazy(() => DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateWithoutCampaignInput>;
export const DiceRollLogCreateWithoutCampaignInputObjectZodSchema = makeSchema();
