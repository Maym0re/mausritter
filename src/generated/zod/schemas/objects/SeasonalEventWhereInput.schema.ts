import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSeasonNameFilterObjectSchema as EnumSeasonNameFilterObjectSchema } from './EnumSeasonNameFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const seasonaleventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SeasonalEventWhereInputObjectSchema), z.lazy(() => SeasonalEventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SeasonalEventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SeasonalEventWhereInputObjectSchema), z.lazy(() => SeasonalEventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameFilterObjectSchema), SeasonNameSchema]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  effect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SeasonalEventWhereInputObjectSchema: z.ZodType<Prisma.SeasonalEventWhereInput> = seasonaleventwhereinputSchema as unknown as z.ZodType<Prisma.SeasonalEventWhereInput>;
export const SeasonalEventWhereInputObjectZodSchema = seasonaleventwhereinputSchema;
