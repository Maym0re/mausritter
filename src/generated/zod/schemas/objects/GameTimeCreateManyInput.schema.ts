import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  rounds: z.number().int().optional(),
  turns: z.number().int().optional(),
  watches: z.number().int().optional(),
  days: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GameTimeCreateManyInputObjectSchema: z.ZodType<Prisma.GameTimeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeCreateManyInput>;
export const GameTimeCreateManyInputObjectZodSchema = makeSchema();
