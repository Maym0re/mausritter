import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSeasonNameWithAggregatesFilterObjectSchema } from './EnumSeasonNameWithAggregatesFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const seasonaleventscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SeasonalEventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SeasonalEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SeasonalEventScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SeasonalEventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SeasonalEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameWithAggregatesFilterObjectSchema), SeasonNameSchema]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  effect: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SeasonalEventScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SeasonalEventScalarWhereWithAggregatesInput> = seasonaleventscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SeasonalEventScalarWhereWithAggregatesInput>;
export const SeasonalEventScalarWhereWithAggregatesInputObjectZodSchema = seasonaleventscalarwherewithaggregatesinputSchema;
