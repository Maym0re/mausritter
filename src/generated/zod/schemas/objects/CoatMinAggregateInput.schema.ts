import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  color: z.literal(true).optional(),
  pattern: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CoatMinAggregateInputObjectSchema: z.ZodType<Prisma.CoatMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CoatMinAggregateInputType>;
export const CoatMinAggregateInputObjectZodSchema = makeSchema();
