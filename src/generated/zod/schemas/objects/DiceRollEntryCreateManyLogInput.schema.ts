import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int(),
  type: z.string(),
  value: z.number().int(),
  sides: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DiceRollEntryCreateManyLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateManyLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateManyLogInput>;
export const DiceRollEntryCreateManyLogInputObjectZodSchema = makeSchema();
