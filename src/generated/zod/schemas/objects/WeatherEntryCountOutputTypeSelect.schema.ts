import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryCountOutputTypeCountCampaignArgsObjectSchema as WeatherEntryCountOutputTypeCountCampaignArgsObjectSchema } from './WeatherEntryCountOutputTypeCountCampaignArgs.schema'

const makeSchema = () => z.object({
  Campaign: z.union([z.boolean(), z.lazy(() => WeatherEntryCountOutputTypeCountCampaignArgsObjectSchema)]).optional()
}).strict();
export const WeatherEntryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WeatherEntryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCountOutputTypeSelect>;
export const WeatherEntryCountOutputTypeSelectObjectZodSchema = makeSchema();
