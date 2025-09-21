import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema'

const landmarkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkScalarWhereInputObjectSchema), z.lazy(() => LandmarkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkScalarWhereInputObjectSchema), z.lazy(() => LandmarkScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const LandmarkScalarWhereInputObjectSchema: z.ZodType<Prisma.LandmarkScalarWhereInput> = landmarkscalarwhereinputSchema as unknown as z.ZodType<Prisma.LandmarkScalarWhereInput>;
export const LandmarkScalarWhereInputObjectZodSchema = landmarkscalarwhereinputSchema;
