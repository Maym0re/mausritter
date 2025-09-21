import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  notation: z.literal(true).optional(),
  total: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DiceRollLogCountAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCountAggregateInputType>;
export const DiceRollLogCountAggregateInputObjectZodSchema = makeSchema();
