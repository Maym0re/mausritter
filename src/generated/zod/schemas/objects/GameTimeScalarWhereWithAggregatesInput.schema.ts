import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gametimescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GameTimeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameTimeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameTimeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameTimeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameTimeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rounds: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  turns: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  watches: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  days: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GameTimeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GameTimeScalarWhereWithAggregatesInput> = gametimescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GameTimeScalarWhereWithAggregatesInput>;
export const GameTimeScalarWhereWithAggregatesInputObjectZodSchema = gametimescalarwherewithaggregatesinputSchema;
