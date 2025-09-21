import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const backgroundscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BackgroundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BackgroundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BackgroundScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BackgroundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BackgroundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  itemA: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  itemB: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BackgroundScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BackgroundScalarWhereWithAggregatesInput> = backgroundscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BackgroundScalarWhereWithAggregatesInput>;
export const BackgroundScalarWhereWithAggregatesInputObjectZodSchema = backgroundscalarwherewithaggregatesinputSchema;
