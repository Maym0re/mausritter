import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedUpdateWithoutCampaignInput.schema';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WeatherEntryUpdateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)]),
  where: z.lazy(() => WeatherEntryWhereInputObjectSchema).optional()
}).strict();
export const WeatherEntryUpsertWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryUpsertWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUpsertWithoutCampaignInput>;
export const WeatherEntryUpsertWithoutCampaignInputObjectZodSchema = makeSchema();
