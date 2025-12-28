import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryWhereUniqueInputObjectSchema as WeatherEntryWhereUniqueInputObjectSchema } from './WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema as WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema as WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WeatherEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCreateOrConnectWithoutCampaignInput>;
export const WeatherEntryCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
