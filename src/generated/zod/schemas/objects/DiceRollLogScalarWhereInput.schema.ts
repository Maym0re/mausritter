import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const dicerolllogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollLogScalarWhereInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollLogScalarWhereInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  total: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiceRollLogScalarWhereInputObjectSchema: z.ZodType<Prisma.DiceRollLogScalarWhereInput> = dicerolllogscalarwhereinputSchema as unknown as z.ZodType<Prisma.DiceRollLogScalarWhereInput>;
export const DiceRollLogScalarWhereInputObjectZodSchema = dicerolllogscalarwhereinputSchema;
