import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutCampaignInputObjectSchema as CharacterUncheckedUpdateManyWithoutCampaignInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutCampaignInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCampaignInput>;
export const CharacterUpdateManyWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
