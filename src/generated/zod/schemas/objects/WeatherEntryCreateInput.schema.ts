import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignCreateNestedManyWithoutWeatherEntryInputObjectSchema } from './CampaignCreateNestedManyWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season: SeasonNameSchema,
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean(),
  Campaign: z.lazy(() => CampaignCreateNestedManyWithoutWeatherEntryInputObjectSchema)
}).strict();
export const WeatherEntryCreateInputObjectSchema: z.ZodType<Prisma.WeatherEntryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCreateInput>;
export const WeatherEntryCreateInputObjectZodSchema = makeSchema();
