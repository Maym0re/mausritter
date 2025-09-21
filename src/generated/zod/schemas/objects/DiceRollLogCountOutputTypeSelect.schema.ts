import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  entries: z.boolean().optional()
}).strict();
export const DiceRollLogCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DiceRollLogCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCountOutputTypeSelect>;
export const DiceRollLogCountOutputTypeSelectObjectZodSchema = makeSchema();
