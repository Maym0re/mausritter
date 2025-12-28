import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterListRelationFilterObjectSchema as CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema'

const coatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CoatWhereInputObjectSchema), z.lazy(() => CoatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CoatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CoatWhereInputObjectSchema), z.lazy(() => CoatWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pattern: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
export const CoatWhereInputObjectSchema: z.ZodType<Prisma.CoatWhereInput> = coatwhereinputSchema as unknown as z.ZodType<Prisma.CoatWhereInput>;
export const CoatWhereInputObjectZodSchema = coatwhereinputSchema;
