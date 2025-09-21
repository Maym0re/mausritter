import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutCampaignInputObjectSchema } from './CharacterUpdateWithoutCampaignInput.schema';
import { CharacterUncheckedUpdateWithoutCampaignInputObjectSchema } from './CharacterUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutCampaignInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutCampaignInput>;
export const CharacterUpdateWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
