import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const landmarkdetailscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema), z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema), z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  effect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  landmarkId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const LandmarkDetailScalarWhereInputObjectSchema: z.ZodType<Prisma.LandmarkDetailScalarWhereInput> = landmarkdetailscalarwhereinputSchema as unknown as z.ZodType<Prisma.LandmarkDetailScalarWhereInput>;
export const LandmarkDetailScalarWhereInputObjectZodSchema = landmarkdetailscalarwhereinputSchema;
