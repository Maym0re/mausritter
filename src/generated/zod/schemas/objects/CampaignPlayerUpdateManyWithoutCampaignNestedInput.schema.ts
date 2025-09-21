import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema';
import { CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutCampaignInput.schema';
import { CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema } from './CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInput.schema';
import { CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyCampaignInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput.schema';
import { CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateManyWithWhereWithoutCampaignInput.schema';
import { CampaignPlayerScalarWhereInputObjectSchema } from './CampaignPlayerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateManyWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyWithoutCampaignNestedInput>;
export const CampaignPlayerUpdateManyWithoutCampaignNestedInputObjectZodSchema = makeSchema();
