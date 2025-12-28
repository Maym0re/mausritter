import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  userId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DiceRollLogCreateManyInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyInput>;
export const DiceRollLogCreateManyInputObjectZodSchema = makeSchema();
