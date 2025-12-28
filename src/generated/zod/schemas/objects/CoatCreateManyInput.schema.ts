import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  color: z.string(),
  pattern: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CoatCreateManyInputObjectSchema: z.ZodType<Prisma.CoatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateManyInput>;
export const CoatCreateManyInputObjectZodSchema = makeSchema();
