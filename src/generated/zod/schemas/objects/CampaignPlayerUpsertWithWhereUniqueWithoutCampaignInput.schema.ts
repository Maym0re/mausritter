import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedUpdateWithoutCampaignInput.schema';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CampaignPlayerUpdateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInput>;
export const CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
