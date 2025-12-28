import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryUpdateWithoutCampaignInputObjectSchema as WeatherEntryUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema as WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedUpdateWithoutCampaignInput.schema';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema as WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema as WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WeatherEntryUpdateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)]),
  where: z.lazy(() => WeatherEntryWhereInputObjectSchema).optional()
}).strict();
export const WeatherEntryUpsertWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryUpsertWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUpsertWithoutCampaignInput>;
export const WeatherEntryUpsertWithoutCampaignInputObjectZodSchema = makeSchema();
