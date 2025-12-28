import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema as CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema } from './CampaignCreateNestedOneWithoutDiceRollsInput.schema';
import { UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema as UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema } from './UserCreateNestedOneWithoutDiceRollLogsInput.schema';
import { DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema as DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema } from './DiceRollEntryCreateNestedManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema),
  entries: z.lazy(() => DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema).optional()
}).strict();
export const DiceRollLogCreateInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateInput>;
export const DiceRollLogCreateInputObjectZodSchema = makeSchema();
