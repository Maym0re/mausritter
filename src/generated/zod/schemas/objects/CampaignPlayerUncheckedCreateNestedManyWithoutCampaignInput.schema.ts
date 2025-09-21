import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema';
import { CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutCampaignInput.schema';
import { CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyCampaignInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInput>;
export const CampaignPlayerUncheckedCreateNestedManyWithoutCampaignInputObjectZodSchema = makeSchema();
