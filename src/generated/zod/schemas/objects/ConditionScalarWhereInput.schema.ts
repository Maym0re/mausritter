import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const conditionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConditionScalarWhereInputObjectSchema), z.lazy(() => ConditionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConditionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConditionScalarWhereInputObjectSchema), z.lazy(() => ConditionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clearRequirement: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  effects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConditionScalarWhereInputObjectSchema: z.ZodType<Prisma.ConditionScalarWhereInput> = conditionscalarwhereinputSchema as unknown as z.ZodType<Prisma.ConditionScalarWhereInput>;
export const ConditionScalarWhereInputObjectZodSchema = conditionscalarwhereinputSchema;
