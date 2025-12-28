import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutCampaignInputObjectSchema as CampaignPlayerCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateWithoutCampaignInput.schema';
import { CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema as CampaignPlayerUncheckedCreateWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutCampaignInput.schema';
import { CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema as CampaignPlayerCreateOrConnectWithoutCampaignInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutCampaignInput.schema';
import { CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema as CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInputObjectSchema } from './CampaignPlayerUpsertWithWhereUniqueWithoutCampaignInput.schema';
import { CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema as CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyCampaignInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema as CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateWithWhereUniqueWithoutCampaignInput.schema';
import { CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema as CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema } from './CampaignPlayerUpdateManyWithWhereWithoutCampaignInput.schema';
import { CampaignPlayerScalarWhereInputObjectSchema as CampaignPlayerScalarWhereInputObjectSchema } from './CampaignPlayerScalarWhereInput.schema'

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
export const CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInput>;
export const CampaignPlayerUncheckedUpdateManyWithoutCampaignNestedInputObjectZodSchema = makeSchema();
