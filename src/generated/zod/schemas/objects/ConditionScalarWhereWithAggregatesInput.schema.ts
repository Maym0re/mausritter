import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const conditionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ConditionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConditionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConditionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConditionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConditionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  clearRequirement: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  effects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConditionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConditionScalarWhereWithAggregatesInput> = conditionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConditionScalarWhereWithAggregatesInput>;
export const ConditionScalarWhereWithAggregatesInputObjectZodSchema = conditionscalarwherewithaggregatesinputSchema;
