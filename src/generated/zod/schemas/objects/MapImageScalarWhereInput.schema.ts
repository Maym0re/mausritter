import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mapimagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MapImageScalarWhereInputObjectSchema), z.lazy(() => MapImageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MapImageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MapImageScalarWhereInputObjectSchema), z.lazy(() => MapImageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  x: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  y: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  height: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MapImageScalarWhereInputObjectSchema: z.ZodType<Prisma.MapImageScalarWhereInput> = mapimagescalarwhereinputSchema as unknown as z.ZodType<Prisma.MapImageScalarWhereInput>;
export const MapImageScalarWhereInputObjectZodSchema = mapimagescalarwhereinputSchema;
