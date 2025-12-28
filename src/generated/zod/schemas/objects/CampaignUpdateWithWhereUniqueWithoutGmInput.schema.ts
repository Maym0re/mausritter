import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithoutGmInputObjectSchema as CampaignUpdateWithoutGmInputObjectSchema } from './CampaignUpdateWithoutGmInput.schema';
import { CampaignUncheckedUpdateWithoutGmInputObjectSchema as CampaignUncheckedUpdateWithoutGmInputObjectSchema } from './CampaignUncheckedUpdateWithoutGmInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CampaignUpdateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGmInputObjectSchema)])
}).strict();
export const CampaignUpdateWithWhereUniqueWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutGmInput>;
export const CampaignUpdateWithWhereUniqueWithoutGmInputObjectZodSchema = makeSchema();
