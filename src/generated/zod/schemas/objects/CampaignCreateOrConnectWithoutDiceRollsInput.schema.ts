import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutDiceRollsInputObjectSchema as CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema as CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutDiceRollsInput>;
export const CampaignCreateOrConnectWithoutDiceRollsInputObjectZodSchema = makeSchema();
