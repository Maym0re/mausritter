import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characters: z.boolean().optional()
}).strict();
export const BackgroundCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BackgroundCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCountOutputTypeSelect>;
export const BackgroundCountOutputTypeSelectObjectZodSchema = makeSchema();
