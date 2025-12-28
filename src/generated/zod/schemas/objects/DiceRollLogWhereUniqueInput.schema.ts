import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DiceRollLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.DiceRollLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogWhereUniqueInput>;
export const DiceRollLogWhereUniqueInputObjectZodSchema = makeSchema();
