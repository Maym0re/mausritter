import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable()
}).strict();
export const LandmarkDetailCreateManyLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateManyLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateManyLandmarkInput>;
export const LandmarkDetailCreateManyLandmarkInputObjectZodSchema = makeSchema();
