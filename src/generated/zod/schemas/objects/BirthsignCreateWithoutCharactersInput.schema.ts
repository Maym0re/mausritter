import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sign: z.string(),
  disposition: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BirthsignCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BirthsignCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCreateWithoutCharactersInput>;
export const BirthsignCreateWithoutCharactersInputObjectZodSchema = makeSchema();
