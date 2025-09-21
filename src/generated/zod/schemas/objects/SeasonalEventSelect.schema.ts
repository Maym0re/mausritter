import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  season: z.boolean().optional(),
  description: z.boolean().optional(),
  effect: z.boolean().optional()
}).strict();
export const SeasonalEventSelectObjectSchema: z.ZodType<Prisma.SeasonalEventSelect> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventSelect>;
export const SeasonalEventSelectObjectZodSchema = makeSchema();
