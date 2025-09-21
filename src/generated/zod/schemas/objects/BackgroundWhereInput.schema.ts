import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema'

const backgroundwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BackgroundWhereInputObjectSchema), z.lazy(() => BackgroundWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BackgroundWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BackgroundWhereInputObjectSchema), z.lazy(() => BackgroundWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemA: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemB: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
export const BackgroundWhereInputObjectSchema: z.ZodType<Prisma.BackgroundWhereInput> = backgroundwhereinputSchema as unknown as z.ZodType<Prisma.BackgroundWhereInput>;
export const BackgroundWhereInputObjectZodSchema = backgroundwhereinputSchema;
