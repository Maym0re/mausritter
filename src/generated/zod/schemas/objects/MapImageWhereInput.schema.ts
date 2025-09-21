import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HexMapScalarRelationFilterObjectSchema } from './HexMapScalarRelationFilter.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const mapimagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MapImageWhereInputObjectSchema), z.lazy(() => MapImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapImageWhereInputObjectSchema), z.lazy(() => MapImageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  hexMap: z.union([z.lazy(() => HexMapScalarRelationFilterObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema)]).optional()
}).strict();
export const MapImageWhereInputObjectSchema: z.ZodType<Prisma.MapImageWhereInput> = mapimagewhereinputSchema as unknown as z.ZodType<Prisma.MapImageWhereInput>;
export const MapImageWhereInputObjectZodSchema = mapimagewhereinputSchema;
