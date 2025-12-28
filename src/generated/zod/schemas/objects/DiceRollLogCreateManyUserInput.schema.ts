import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DiceRollLogCreateManyUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyUserInput>;
export const DiceRollLogCreateManyUserInputObjectZodSchema = makeSchema();
