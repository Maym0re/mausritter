import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema';
import { WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema } from './WeatherEntryCreateOrConnectWithoutCampaignInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './WeatherEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  connect: z.lazy(() => WeatherEntryWhereUniqueInputObjectSchema).optional()
}).strict();
export const WeatherEntryCreateNestedOneWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryCreateNestedOneWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCreateNestedOneWithoutCampaignInput>;
export const WeatherEntryCreateNestedOneWithoutCampaignInputObjectZodSchema = makeSchema();
