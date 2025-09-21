import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithoutWeatherEntryInputObjectSchema } from './CampaignUpdateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedUpdateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedUpdateWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CampaignUpdateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutWeatherEntryInputObjectSchema)])
}).strict();
export const CampaignUpdateWithWhereUniqueWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutWeatherEntryInput>;
export const CampaignUpdateWithWhereUniqueWithoutWeatherEntryInputObjectZodSchema = makeSchema();
