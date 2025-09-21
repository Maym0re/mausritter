import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutCampaignInput>;
export const CampaignPlayerCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
