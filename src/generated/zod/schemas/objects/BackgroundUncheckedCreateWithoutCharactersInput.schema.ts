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
export const BackgroundUncheckedCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundUncheckedCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUncheckedCreateWithoutCharactersInput>;
export const BackgroundUncheckedCreateWithoutCharactersInputObjectZodSchema = makeSchema();
