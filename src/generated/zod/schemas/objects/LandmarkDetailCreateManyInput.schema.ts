import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  landmarkId: z.string().optional().nullable()
}).strict();
export const LandmarkDetailCreateManyInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateManyInput>;
export const LandmarkDetailCreateManyInputObjectZodSchema = makeSchema();
