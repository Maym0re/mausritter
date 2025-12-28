import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  total: z.literal(true).optional()
}).strict();
export const DiceRollLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogAvgAggregateInputType>;
export const DiceRollLogAvgAggregateInputObjectZodSchema = makeSchema();
