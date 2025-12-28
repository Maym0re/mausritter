import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { CampaignUncheckedCreateNestedManyWithoutWeatherEntryInputObjectSchema as CampaignUncheckedCreateNestedManyWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedCreateNestedManyWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season: SeasonNameSchema,
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean(),
  Campaign: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutWeatherEntryInputObjectSchema).optional()
}).strict();
export const WeatherEntryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WeatherEntryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUncheckedCreateInput>;
export const WeatherEntryUncheckedCreateInputObjectZodSchema = makeSchema();
