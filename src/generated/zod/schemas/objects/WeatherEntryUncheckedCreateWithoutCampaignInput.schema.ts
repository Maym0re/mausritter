import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season: SeasonNameSchema,
  roll: z.number().int(),
  weather: z.string(),
  isPoorCondition: z.boolean()
}).strict();
export const WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.WeatherEntryUncheckedCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUncheckedCreateWithoutCampaignInput>;
export const WeatherEntryUncheckedCreateWithoutCampaignInputObjectZodSchema = makeSchema();
