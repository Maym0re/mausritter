import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const birthsignscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BirthsignScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BirthsignScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BirthsignScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BirthsignScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BirthsignScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sign: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  disposition: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BirthsignScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BirthsignScalarWhereWithAggregatesInput> = birthsignscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BirthsignScalarWhereWithAggregatesInput>;
export const BirthsignScalarWhereWithAggregatesInputObjectZodSchema = birthsignscalarwherewithaggregatesinputSchema;
