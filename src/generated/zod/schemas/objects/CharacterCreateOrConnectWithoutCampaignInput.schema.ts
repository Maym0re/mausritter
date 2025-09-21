import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutCampaignInputObjectSchema } from './CharacterCreateWithoutCampaignInput.schema';
import { CharacterUncheckedCreateWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutCampaignInput>;
export const CharacterCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
