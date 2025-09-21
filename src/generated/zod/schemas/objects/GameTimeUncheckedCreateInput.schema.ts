import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  rounds: z.number().int().optional(),
  turns: z.number().int().optional(),
  watches: z.number().int().optional(),
  days: z.number().int().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const GameTimeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GameTimeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUncheckedCreateInput>;
export const GameTimeUncheckedCreateInputObjectZodSchema = makeSchema();
