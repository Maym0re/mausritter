import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BackgroundCreateManyInputObjectSchema: z.ZodType<Prisma.BackgroundCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCreateManyInput>;
export const BackgroundCreateManyInputObjectZodSchema = makeSchema();
