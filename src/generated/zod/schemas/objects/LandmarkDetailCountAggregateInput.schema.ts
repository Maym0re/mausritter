import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  landmarkId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LandmarkDetailCountAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCountAggregateInputType>;
export const LandmarkDetailCountAggregateInputObjectZodSchema = makeSchema();
