import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithoutCampaignInputObjectSchema as CampaignPlayerUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CampaignPlayerUpdateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput>;
export const CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
