import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterListRelationFilterObjectSchema as CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema'

const birthsignwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BirthsignWhereInputObjectSchema), z.lazy(() => BirthsignWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BirthsignWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BirthsignWhereInputObjectSchema), z.lazy(() => BirthsignWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sign: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  disposition: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
export const BirthsignWhereInputObjectSchema: z.ZodType<Prisma.BirthsignWhereInput> = birthsignwhereinputSchema as unknown as z.ZodType<Prisma.BirthsignWhereInput>;
export const BirthsignWhereInputObjectZodSchema = birthsignwhereinputSchema;
