import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignFindManySchema } from '../findManyCampaign.schema';
import { WeatherEntryCountOutputTypeArgsObjectSchema } from './WeatherEntryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WeatherEntryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WeatherEntryIncludeObjectSchema: z.ZodType<Prisma.WeatherEntryInclude> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryInclude>;
export const WeatherEntryIncludeObjectZodSchema = makeSchema();
