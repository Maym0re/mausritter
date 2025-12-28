import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const dicerollentryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema), z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema), z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  logId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sides: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiceRollEntryScalarWhereInputObjectSchema: z.ZodType<Prisma.DiceRollEntryScalarWhereInput> = dicerollentryscalarwhereinputSchema as unknown as z.ZodType<Prisma.DiceRollEntryScalarWhereInput>;
export const DiceRollEntryScalarWhereInputObjectZodSchema = dicerollentryscalarwhereinputSchema;
