import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const dicerolllogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  notation: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  total: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiceRollLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DiceRollLogScalarWhereWithAggregatesInput> = dicerolllogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DiceRollLogScalarWhereWithAggregatesInput>;
export const DiceRollLogScalarWhereWithAggregatesInputObjectZodSchema = dicerolllogscalarwherewithaggregatesinputSchema;
