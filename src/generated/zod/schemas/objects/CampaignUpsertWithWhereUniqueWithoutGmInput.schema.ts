import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithoutGmInputObjectSchema as CampaignUpdateWithoutGmInputObjectSchema } from './CampaignUpdateWithoutGmInput.schema';
import { CampaignUncheckedUpdateWithoutGmInputObjectSchema as CampaignUncheckedUpdateWithoutGmInputObjectSchema } from './CampaignUncheckedUpdateWithoutGmInput.schema';
import { CampaignCreateWithoutGmInputObjectSchema as CampaignCreateWithoutGmInputObjectSchema } from './CampaignCreateWithoutGmInput.schema';
import { CampaignUncheckedCreateWithoutGmInputObjectSchema as CampaignUncheckedCreateWithoutGmInputObjectSchema } from './CampaignUncheckedCreateWithoutGmInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CampaignUpdateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGmInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema)])
}).strict();
export const CampaignUpsertWithWhereUniqueWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutGmInput>;
export const CampaignUpsertWithWhereUniqueWithoutGmInputObjectZodSchema = makeSchema();
