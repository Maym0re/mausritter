import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
}).strict();
export const LandmarkCreateManyHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkCreateManyHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateManyHexTypeInput>;
export const LandmarkCreateManyHexTypeInputObjectZodSchema = makeSchema();
