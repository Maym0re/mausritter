import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  total: z.literal(true).optional()
}).strict();
export const DiceRollLogSumAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogSumAggregateInputType>;
export const DiceRollLogSumAggregateInputObjectZodSchema = makeSchema();
