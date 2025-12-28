import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mapimagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MapImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MapImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapImageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MapImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MapImageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MapImageScalarWhereWithAggregatesInput> = mapimagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MapImageScalarWhereWithAggregatesInput>;
export const MapImageScalarWhereWithAggregatesInputObjectZodSchema = mapimagescalarwherewithaggregatesinputSchema;
