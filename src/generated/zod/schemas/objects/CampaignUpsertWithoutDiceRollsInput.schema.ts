import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUpdateWithoutDiceRollsInput.schema';
import { CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedUpdateWithoutDiceRollsInput.schema';
import { CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutDiceRollsInput>;
export const CampaignUpsertWithoutDiceRollsInputObjectZodSchema = makeSchema();
