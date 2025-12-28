import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const WeatherEntryCountOutputTypeCountCampaignArgsObjectSchema = makeSchema();
export const WeatherEntryCountOutputTypeCountCampaignArgsObjectZodSchema = makeSchema();
