import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const landmarkdetailscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LandmarkDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkDetailScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LandmarkDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  effect: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  landmarkId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const LandmarkDetailScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LandmarkDetailScalarWhereWithAggregatesInput> = landmarkdetailscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LandmarkDetailScalarWhereWithAggregatesInput>;
export const LandmarkDetailScalarWhereWithAggregatesInputObjectZodSchema = landmarkdetailscalarwherewithaggregatesinputSchema;
