import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CampaignPlayerUpdateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput>;
export const CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
