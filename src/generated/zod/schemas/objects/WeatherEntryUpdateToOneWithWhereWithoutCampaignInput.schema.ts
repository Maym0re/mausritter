import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema';
import { WeatherEntryUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WeatherEntryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WeatherEntryUpdateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryUpdateToOneWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUpdateToOneWithWhereWithoutCampaignInput>;
export const WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
