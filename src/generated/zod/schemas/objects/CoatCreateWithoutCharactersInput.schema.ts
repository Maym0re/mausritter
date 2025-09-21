import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  color: z.string(),
  pattern: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CoatCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateWithoutCharactersInput>;
export const CoatCreateWithoutCharactersInputObjectZodSchema = makeSchema();
