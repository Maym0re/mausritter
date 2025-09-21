import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutCampaignInputObjectSchema } from './CharacterCreateWithoutCampaignInput.schema';
import { CharacterUncheckedCreateWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateWithoutCampaignInput.schema';
import { CharacterCreateOrConnectWithoutCampaignInputObjectSchema } from './CharacterCreateOrConnectWithoutCampaignInput.schema';
import { CharacterCreateManyCampaignInputEnvelopeObjectSchema } from './CharacterCreateManyCampaignInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterCreateNestedManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateNestedManyWithoutCampaignInput>;
export const CharacterCreateNestedManyWithoutCampaignInputObjectZodSchema = makeSchema();
