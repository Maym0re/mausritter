import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const nestedenumseasonnamefilterSchema = z.object({
  equals: SeasonNameSchema.optional(),
  in: SeasonNameSchema.array().optional(),
  notIn: SeasonNameSchema.array().optional(),
  not: z.union([SeasonNameSchema, z.lazy(() => NestedEnumSeasonNameFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSeasonNameFilterObjectSchema: z.ZodType<Prisma.NestedEnumSeasonNameFilter> = nestedenumseasonnamefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSeasonNameFilter>;
export const NestedEnumSeasonNameFilterObjectZodSchema = nestedenumseasonnamefilterSchema;
