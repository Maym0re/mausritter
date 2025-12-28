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
export const DiceRollLogMinAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogMinAggregateInputType>;
export const DiceRollLogMinAggregateInputObjectZodSchema = makeSchema();
