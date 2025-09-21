import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LandmarkListRelationFilterObjectSchema } from './LandmarkListRelationFilter.schema';
import { HexCellListRelationFilterObjectSchema } from './HexCellListRelationFilter.schema'

const hextypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HexTypeWhereInputObjectSchema), z.lazy(() => HexTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexTypeWhereInputObjectSchema), z.lazy(() => HexTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  landmarks: z.lazy(() => LandmarkListRelationFilterObjectSchema).optional(),
  HexCell: z.lazy(() => HexCellListRelationFilterObjectSchema).optional()
}).strict();
export const HexTypeWhereInputObjectSchema: z.ZodType<Prisma.HexTypeWhereInput> = hextypewhereinputSchema as unknown as z.ZodType<Prisma.HexTypeWhereInput>;
export const HexTypeWhereInputObjectZodSchema = hextypewhereinputSchema;
