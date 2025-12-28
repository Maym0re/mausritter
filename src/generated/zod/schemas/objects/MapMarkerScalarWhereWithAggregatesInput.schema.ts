import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mapmarkerscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MapMarkerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MapMarkerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapMarkerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapMarkerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MapMarkerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  z: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MapMarkerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MapMarkerScalarWhereWithAggregatesInput> = mapmarkerscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MapMarkerScalarWhereWithAggregatesInput>;
export const MapMarkerScalarWhereWithAggregatesInputObjectZodSchema = mapmarkerscalarwherewithaggregatesinputSchema;
