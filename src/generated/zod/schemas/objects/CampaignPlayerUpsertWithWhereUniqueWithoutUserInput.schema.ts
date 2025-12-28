import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithoutUserInputObjectSchema as CampaignPlayerUpdateWithoutUserInputObjectSchema } from './CampaignPlayerUpdateWithoutUserInput.schema';
import { CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema as CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedUpdateWithoutUserInput.schema';
import { CampaignPlayerCreateWithoutUserInputObjectSchema as CampaignPlayerCreateWithoutUserInputObjectSchema } from './CampaignPlayerCreateWithoutUserInput.schema';
import { CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema as CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CampaignPlayerUpdateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CampaignPlayerUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpsertWithWhereUniqueWithoutUserInput>;
export const CampaignPlayerUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
