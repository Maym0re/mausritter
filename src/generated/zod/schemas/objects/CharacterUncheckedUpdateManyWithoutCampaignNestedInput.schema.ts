import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutCampaignInputObjectSchema } from './CharacterCreateWithoutCampaignInput.schema';
import { CharacterUncheckedCreateWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateWithoutCampaignInput.schema';
import { CharacterCreateOrConnectWithoutCampaignInputObjectSchema } from './CharacterCreateOrConnectWithoutCampaignInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutCampaignInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutCampaignInput.schema';
import { CharacterCreateManyCampaignInputEnvelopeObjectSchema } from './CharacterCreateManyCampaignInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutCampaignInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutCampaignInput.schema';
import { CharacterUpdateManyWithWhereWithoutCampaignInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutCampaignInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutCampaignInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedUpdateManyWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutCampaignNestedInput>;
export const CharacterUncheckedUpdateManyWithoutCampaignNestedInputObjectZodSchema = makeSchema();
