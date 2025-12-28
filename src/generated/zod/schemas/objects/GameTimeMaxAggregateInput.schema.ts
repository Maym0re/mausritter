import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  rounds: z.literal(true).optional(),
  turns: z.literal(true).optional(),
  watches: z.literal(true).optional(),
  days: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GameTimeMaxAggregateInputObjectSchema: z.ZodType<Prisma.GameTimeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeMaxAggregateInputType>;
export const GameTimeMaxAggregateInputObjectZodSchema = makeSchema();
