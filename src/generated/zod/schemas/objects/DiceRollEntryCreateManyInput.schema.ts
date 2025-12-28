import * as z from 'zod';
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
export const DiceRollEntryCreateManyInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateManyInput>;
export const DiceRollEntryCreateManyInputObjectZodSchema = makeSchema();
