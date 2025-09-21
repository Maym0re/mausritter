import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DiceRollLogScalarRelationFilterObjectSchema } from './DiceRollLogScalarRelationFilter.schema';
import { DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema'

const dicerollentrywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollEntryWhereInputObjectSchema), z.lazy(() => DiceRollEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollEntryWhereInputObjectSchema), z.lazy(() => DiceRollEntryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  logId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sides: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  log: z.union([z.lazy(() => DiceRollLogScalarRelationFilterObjectSchema), z.lazy(() => DiceRollLogWhereInputObjectSchema)]).optional()
}).strict();
export const DiceRollEntryWhereInputObjectSchema: z.ZodType<Prisma.DiceRollEntryWhereInput> = dicerollentrywhereinputSchema as unknown as z.ZodType<Prisma.DiceRollEntryWhereInput>;
export const DiceRollEntryWhereInputObjectZodSchema = dicerollentrywhereinputSchema;
