import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mapmarkerscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MapMarkerScalarWhereInputObjectSchema), z.lazy(() => MapMarkerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapMarkerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapMarkerScalarWhereInputObjectSchema), z.lazy(() => MapMarkerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  z: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MapMarkerScalarWhereInputObjectSchema: z.ZodType<Prisma.MapMarkerScalarWhereInput> = mapmarkerscalarwhereinputSchema as unknown as z.ZodType<Prisma.MapMarkerScalarWhereInput>;
export const MapMarkerScalarWhereInputObjectZodSchema = mapmarkerscalarwhereinputSchema;
