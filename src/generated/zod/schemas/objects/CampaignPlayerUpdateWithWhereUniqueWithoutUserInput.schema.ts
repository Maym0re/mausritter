import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithoutUserInputObjectSchema as CampaignPlayerUpdateWithoutUserInputObjectSchema } from './CampaignPlayerUpdateWithoutUserInput.schema';
import { CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema as CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CampaignPlayerUpdateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CampaignPlayerUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateWithWhereUniqueWithoutUserInput>;
export const CampaignPlayerUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
