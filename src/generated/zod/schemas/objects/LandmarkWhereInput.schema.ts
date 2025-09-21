import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { HexTypeScalarRelationFilterObjectSchema } from './HexTypeScalarRelationFilter.schema';
import { HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema';
import { LandmarkDetailListRelationFilterObjectSchema } from './LandmarkDetailListRelationFilter.schema';
import { HexCellListRelationFilterObjectSchema } from './HexCellListRelationFilter.schema'

const landmarkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LandmarkWhereInputObjectSchema), z.lazy(() => LandmarkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LandmarkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LandmarkWhereInputObjectSchema), z.lazy(() => LandmarkWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexType: z.union([z.lazy(() => HexTypeScalarRelationFilterObjectSchema), z.lazy(() => HexTypeWhereInputObjectSchema)]).optional(),
  details: z.lazy(() => LandmarkDetailListRelationFilterObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellListRelationFilterObjectSchema).optional()
}).strict();
export const LandmarkWhereInputObjectSchema: z.ZodType<Prisma.LandmarkWhereInput> = landmarkwhereinputSchema as unknown as z.ZodType<Prisma.LandmarkWhereInput>;
export const LandmarkWhereInputObjectZodSchema = landmarkwhereinputSchema;
