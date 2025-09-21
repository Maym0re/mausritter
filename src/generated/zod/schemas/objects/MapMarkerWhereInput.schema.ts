import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HexMapScalarRelationFilterObjectSchema } from './HexMapScalarRelationFilter.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const mapmarkerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MapMarkerWhereInputObjectSchema), z.lazy(() => MapMarkerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapMarkerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapMarkerWhereInputObjectSchema), z.lazy(() => MapMarkerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  z: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  hexMap: z.union([z.lazy(() => HexMapScalarRelationFilterObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema)]).optional()
}).strict();
export const MapMarkerWhereInputObjectSchema: z.ZodType<Prisma.MapMarkerWhereInput> = mapmarkerwhereinputSchema as unknown as z.ZodType<Prisma.MapMarkerWhereInput>;
export const MapMarkerWhereInputObjectZodSchema = mapmarkerwhereinputSchema;
