import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSeasonNameWithAggregatesFilterObjectSchema as EnumSeasonNameWithAggregatesFilterObjectSchema } from './EnumSeasonNameWithAggregatesFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const weatherentryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WeatherEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeatherEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeatherEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeatherEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeatherEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameWithAggregatesFilterObjectSchema), SeasonNameSchema]).optional(),
  roll: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  weather: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPoorCondition: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const WeatherEntryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WeatherEntryScalarWhereWithAggregatesInput> = weatherentryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WeatherEntryScalarWhereWithAggregatesInput>;
export const WeatherEntryScalarWhereWithAggregatesInputObjectZodSchema = weatherentryscalarwherewithaggregatesinputSchema;
