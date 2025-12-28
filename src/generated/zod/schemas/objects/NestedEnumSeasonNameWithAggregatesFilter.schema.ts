import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSeasonNameFilterObjectSchema as NestedEnumSeasonNameFilterObjectSchema } from './NestedEnumSeasonNameFilter.schema'

const nestedenumseasonnamewithaggregatesfilterSchema = z.object({
  equals: SeasonNameSchema.optional(),
  in: SeasonNameSchema.array().optional(),
  notIn: SeasonNameSchema.array().optional(),
  not: z.union([SeasonNameSchema, z.lazy(() => NestedEnumSeasonNameWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSeasonNameFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSeasonNameFilterObjectSchema).optional()
}).strict();
export const NestedEnumSeasonNameWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSeasonNameWithAggregatesFilter> = nestedenumseasonnamewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSeasonNameWithAggregatesFilter>;
export const NestedEnumSeasonNameWithAggregatesFilterObjectZodSchema = nestedenumseasonnamewithaggregatesfilterSchema;
