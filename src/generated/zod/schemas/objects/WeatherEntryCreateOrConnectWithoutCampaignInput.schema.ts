import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryWhereUniqueInputObjectSchema } from './WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WeatherEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCreateOrConnectWithoutCampaignInput>;
export const WeatherEntryCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
