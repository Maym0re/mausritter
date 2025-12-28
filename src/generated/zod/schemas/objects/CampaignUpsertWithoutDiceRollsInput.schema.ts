import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutDiceRollsInputObjectSchema as CampaignUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUpdateWithoutDiceRollsInput.schema';
import { CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema as CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedUpdateWithoutDiceRollsInput.schema';
import { CampaignCreateWithoutDiceRollsInputObjectSchema as CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema as CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutDiceRollsInput>;
export const CampaignUpsertWithoutDiceRollsInputObjectZodSchema = makeSchema();
