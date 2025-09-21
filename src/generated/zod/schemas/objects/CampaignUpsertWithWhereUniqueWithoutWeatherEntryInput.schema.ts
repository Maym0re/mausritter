import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithoutWeatherEntryInputObjectSchema } from './CampaignUpdateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedUpdateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedUpdateWithoutWeatherEntryInput.schema';
import { CampaignCreateWithoutWeatherEntryInputObjectSchema } from './CampaignCreateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedCreateWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CampaignUpdateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutWeatherEntryInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema)])
}).strict();
export const CampaignUpsertWithWhereUniqueWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutWeatherEntryInput>;
export const CampaignUpsertWithWhereUniqueWithoutWeatherEntryInputObjectZodSchema = makeSchema();
