import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSeasonNameFilterObjectSchema } from './EnumSeasonNameFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { CampaignListRelationFilterObjectSchema } from './CampaignListRelationFilter.schema'

const weatherentrywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WeatherEntryWhereInputObjectSchema), z.lazy(() => WeatherEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeatherEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeatherEntryWhereInputObjectSchema), z.lazy(() => WeatherEntryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameFilterObjectSchema), SeasonNameSchema]).optional(),
  roll: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  weather: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPoorCondition: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  Campaign: z.lazy(() => CampaignListRelationFilterObjectSchema).optional()
}).strict();
export const WeatherEntryWhereInputObjectSchema: z.ZodType<Prisma.WeatherEntryWhereInput> = weatherentrywhereinputSchema as unknown as z.ZodType<Prisma.WeatherEntryWhereInput>;
export const WeatherEntryWhereInputObjectZodSchema = weatherentrywhereinputSchema;
