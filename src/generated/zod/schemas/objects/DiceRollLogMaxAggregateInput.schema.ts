import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  notation: z.literal(true).optional(),
  total: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const DiceRollLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogMaxAggregateInputType>;
export const DiceRollLogMaxAggregateInputObjectZodSchema = makeSchema();
