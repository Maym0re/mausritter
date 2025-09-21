import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  inventory: z.boolean().optional(),
  conditions: z.boolean().optional()
}).strict();
export const CharacterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CharacterCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCountOutputTypeSelect>;
export const CharacterCountOutputTypeSelectObjectZodSchema = makeSchema();
