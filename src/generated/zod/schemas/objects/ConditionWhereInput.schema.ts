import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema'

const conditionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConditionWhereInputObjectSchema), z.lazy(() => ConditionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConditionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConditionWhereInputObjectSchema), z.lazy(() => ConditionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clearRequirement: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  effects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
export const ConditionWhereInputObjectSchema: z.ZodType<Prisma.ConditionWhereInput> = conditionwhereinputSchema as unknown as z.ZodType<Prisma.ConditionWhereInput>;
export const ConditionWhereInputObjectZodSchema = conditionwhereinputSchema;
