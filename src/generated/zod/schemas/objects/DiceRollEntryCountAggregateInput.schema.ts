import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  logId: z.literal(true).optional(),
  order: z.literal(true).optional(),
  type: z.literal(true).optional(),
  value: z.literal(true).optional(),
  sides: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DiceRollEntryCountAggregateInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCountAggregateInputType>;
export const DiceRollEntryCountAggregateInputObjectZodSchema = makeSchema();
