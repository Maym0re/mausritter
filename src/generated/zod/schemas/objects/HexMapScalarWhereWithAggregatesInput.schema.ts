import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const hexmapscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HexMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HexMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexMapScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HexMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  centerX: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  centerY: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const HexMapScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HexMapScalarWhereWithAggregatesInput> = hexmapscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HexMapScalarWhereWithAggregatesInput>;
export const HexMapScalarWhereWithAggregatesInputObjectZodSchema = hexmapscalarwherewithaggregatesinputSchema;
