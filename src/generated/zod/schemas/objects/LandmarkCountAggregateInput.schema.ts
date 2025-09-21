import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  hexTypeId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LandmarkCountAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCountAggregateInputType>;
export const LandmarkCountAggregateInputObjectZodSchema = makeSchema();
