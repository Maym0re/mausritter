import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const hexcellscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexCellScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  q: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  r: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  s: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hexTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  landmarkId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  landmarkDetailId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  settlementId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isRevealed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  masterNotes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const HexCellScalarWhereInputObjectSchema: z.ZodType<Prisma.HexCellScalarWhereInput> = hexcellscalarwhereinputSchema as unknown as z.ZodType<Prisma.HexCellScalarWhereInput>;
export const HexCellScalarWhereInputObjectZodSchema = hexcellscalarwhereinputSchema;
