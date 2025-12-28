import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutCampaignInputObjectSchema as CharacterUpdateWithoutCampaignInputObjectSchema } from './CharacterUpdateWithoutCampaignInput.schema';
import { CharacterUncheckedUpdateWithoutCampaignInputObjectSchema as CharacterUncheckedUpdateWithoutCampaignInputObjectSchema } from './CharacterUncheckedUpdateWithoutCampaignInput.schema';
import { CharacterCreateWithoutCampaignInputObjectSchema as CharacterCreateWithoutCampaignInputObjectSchema } from './CharacterCreateWithoutCampaignInput.schema';
import { CharacterUncheckedCreateWithoutCampaignInputObjectSchema as CharacterUncheckedCreateWithoutCampaignInputObjectSchema } from './CharacterUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutCampaignInput>;
export const CharacterUpsertWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
