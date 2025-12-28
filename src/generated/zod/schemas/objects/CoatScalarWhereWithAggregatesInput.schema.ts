import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const coatscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CoatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CoatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CoatScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CoatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CoatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pattern: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CoatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CoatScalarWhereWithAggregatesInput> = coatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CoatScalarWhereWithAggregatesInput>;
export const CoatScalarWhereWithAggregatesInputObjectZodSchema = coatscalarwherewithaggregatesinputSchema;
