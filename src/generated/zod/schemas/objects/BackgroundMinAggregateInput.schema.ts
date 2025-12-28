import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  itemA: z.literal(true).optional(),
  itemB: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BackgroundMinAggregateInputObjectSchema: z.ZodType<Prisma.BackgroundMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundMinAggregateInputType>;
export const BackgroundMinAggregateInputObjectZodSchema = makeSchema();
