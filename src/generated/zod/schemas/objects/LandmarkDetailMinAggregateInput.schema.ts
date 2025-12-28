import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  landmarkId: z.literal(true).optional()
}).strict();
export const LandmarkDetailMinAggregateInputObjectSchema: z.ZodType<Prisma.LandmarkDetailMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailMinAggregateInputType>;
export const LandmarkDetailMinAggregateInputObjectZodSchema = makeSchema();
