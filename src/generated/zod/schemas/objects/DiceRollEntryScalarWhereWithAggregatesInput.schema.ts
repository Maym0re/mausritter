import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const dicerollentryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiceRollEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiceRollEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  logId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  sides: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiceRollEntryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DiceRollEntryScalarWhereWithAggregatesInput> = dicerollentryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DiceRollEntryScalarWhereWithAggregatesInput>;
export const DiceRollEntryScalarWhereWithAggregatesInputObjectZodSchema = dicerollentryscalarwherewithaggregatesinputSchema;
