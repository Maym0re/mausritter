import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characters: z.boolean().optional()
}).strict();
export const ConditionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ConditionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCountOutputTypeSelect>;
export const ConditionCountOutputTypeSelectObjectZodSchema = makeSchema();
