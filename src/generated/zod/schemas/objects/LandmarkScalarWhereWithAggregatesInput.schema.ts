import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const landmarkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LandmarkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LandmarkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hexTypeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const LandmarkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LandmarkScalarWhereWithAggregatesInput> = landmarkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LandmarkScalarWhereWithAggregatesInput>;
export const LandmarkScalarWhereWithAggregatesInputObjectZodSchema = landmarkscalarwherewithaggregatesinputSchema;
