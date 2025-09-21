import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const hextypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HexTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HexTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HexTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const HexTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HexTypeScalarWhereWithAggregatesInput> = hextypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HexTypeScalarWhereWithAggregatesInput>;
export const HexTypeScalarWhereWithAggregatesInputObjectZodSchema = hextypescalarwherewithaggregatesinputSchema;
