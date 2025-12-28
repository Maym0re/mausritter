import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema as CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema';
import { CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema as CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutCampaignInput.schema';
import { CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema as CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyCampaignInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerCreateNestedManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateNestedManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateNestedManyWithoutCampaignInput>;
export const CampaignPlayerCreateNestedManyWithoutCampaignInputObjectZodSchema = makeSchema();
