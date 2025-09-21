import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignFindManySchema } from '../findManyCampaign.schema';
import { WeatherEntryCountOutputTypeArgsObjectSchema } from './WeatherEntryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  season: z.boolean().optional(),
  roll: z.boolean().optional(),
  weather: z.boolean().optional(),
  isPoorCondition: z.boolean().optional(),
  Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WeatherEntryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WeatherEntrySelectObjectSchema: z.ZodType<Prisma.WeatherEntrySelect> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntrySelect>;
export const WeatherEntrySelectObjectZodSchema = makeSchema();
