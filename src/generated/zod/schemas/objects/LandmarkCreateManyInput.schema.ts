import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string()
}).strict();
export const LandmarkCreateManyInputObjectSchema: z.ZodType<Prisma.LandmarkCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateManyInput>;
export const LandmarkCreateManyInputObjectZodSchema = makeSchema();
