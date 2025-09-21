import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { LandmarkNullableScalarRelationFilterObjectSchema } from './LandmarkNullableScalarRelationFilter.schema';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { HexCellListRelationFilterObjectSchema } from './HexCellListRelationFilter.schema'

const landmarkdetailwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkDetailWhereInputObjectSchema), z.lazy(() => LandmarkDetailWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkDetailWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkDetailWhereInputObjectSchema), z.lazy(() => LandmarkDetailWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  effect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  landmarkId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Landmark: z.union([z.lazy(() => LandmarkNullableScalarRelationFilterObjectSchema), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  HexCell: z.lazy(() => HexCellListRelationFilterObjectSchema).optional()
}).strict();
export const LandmarkDetailWhereInputObjectSchema: z.ZodType<Prisma.LandmarkDetailWhereInput> = landmarkdetailwhereinputSchema as unknown as z.ZodType<Prisma.LandmarkDetailWhereInput>;
export const LandmarkDetailWhereInputObjectZodSchema = landmarkdetailwhereinputSchema;
