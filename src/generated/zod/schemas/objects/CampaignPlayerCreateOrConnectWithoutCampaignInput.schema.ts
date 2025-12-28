import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema as CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutCampaignInput>;
export const CampaignPlayerCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
