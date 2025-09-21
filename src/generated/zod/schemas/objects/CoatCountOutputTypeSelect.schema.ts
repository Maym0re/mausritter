import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characters: z.boolean().optional()
}).strict();
export const CoatCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CoatCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CoatCountOutputTypeSelect>;
export const CoatCountOutputTypeSelectObjectZodSchema = makeSchema();
