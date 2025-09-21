import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BackgroundCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCreateWithoutCharactersInput>;
export const BackgroundCreateWithoutCharactersInputObjectZodSchema = makeSchema();
