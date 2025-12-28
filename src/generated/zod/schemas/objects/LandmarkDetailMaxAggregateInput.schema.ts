import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  landmarkId: z.literal(true).optional()
}).strict();
export const LandmarkDetailMaxAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailMaxAggregateInputType>;
export const LandmarkDetailMaxAggregateInputObjectZodSchema = makeSchema();
