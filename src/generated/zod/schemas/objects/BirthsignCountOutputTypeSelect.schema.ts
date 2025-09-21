import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characters: z.boolean().optional()
}).strict();
export const BirthsignCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BirthsignCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCountOutputTypeSelect>;
export const BirthsignCountOutputTypeSelectObjectZodSchema = makeSchema();
