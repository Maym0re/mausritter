import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  itemA: z.literal(true).optional(),
  itemB: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BackgroundCountAggregateInputObjectSchema: z.ZodType<Prisma.BackgroundCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCountAggregateInputType>;
export const BackgroundCountAggregateInputObjectZodSchema = makeSchema();
