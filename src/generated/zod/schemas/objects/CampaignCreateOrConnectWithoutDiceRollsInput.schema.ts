import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutDiceRollsInput>;
export const CampaignCreateOrConnectWithoutDiceRollsInputObjectZodSchema = makeSchema();
