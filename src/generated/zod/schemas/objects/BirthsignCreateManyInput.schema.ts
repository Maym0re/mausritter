import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sign: z.string(),
  disposition: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BirthsignCreateManyInputObjectSchema: z.ZodType<Prisma.BirthsignCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCreateManyInput>;
export const BirthsignCreateManyInputObjectZodSchema = makeSchema();
