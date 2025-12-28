import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  color: z.literal(true).optional(),
  pattern: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CoatMaxAggregateInputObjectSchema: z.ZodType<Prisma.CoatMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CoatMaxAggregateInputType>;
export const CoatMaxAggregateInputObjectZodSchema = makeSchema();
