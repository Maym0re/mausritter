import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { NestedEnumSeasonNameFilterObjectSchema } from './NestedEnumSeasonNameFilter.schema'

const makeSchema = () => z.object({
  equals: SeasonNameSchema.optional(),
  in: SeasonNameSchema.array().optional(),
  notIn: SeasonNameSchema.array().optional(),
  not: z.union([SeasonNameSchema, z.lazy(() => NestedEnumSeasonNameFilterObjectSchema)]).optional()
}).strict();
export const EnumSeasonNameFilterObjectSchema: z.ZodType<Prisma.EnumSeasonNameFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSeasonNameFilter>;
export const EnumSeasonNameFilterObjectZodSchema = makeSchema();
