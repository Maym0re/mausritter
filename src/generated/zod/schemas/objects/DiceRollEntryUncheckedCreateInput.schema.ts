import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  logId: z.string(),
  order: z.number().int(),
  type: z.string(),
  value: z.number().int(),
  sides: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DiceRollEntryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUncheckedCreateInput>;
export const DiceRollEntryUncheckedCreateInputObjectZodSchema = makeSchema();
