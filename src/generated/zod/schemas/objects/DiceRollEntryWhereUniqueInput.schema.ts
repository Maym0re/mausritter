import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DiceRollEntryWhereUniqueInputObjectSchema: z.ZodType<Prisma.DiceRollEntryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryWhereUniqueInput>;
export const DiceRollEntryWhereUniqueInputObjectZodSchema = makeSchema();
