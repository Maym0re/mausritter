import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';

export const DiceRollLogFindUniqueSchema: z.ZodType<Prisma.DiceRollLogFindUniqueArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollLogFindUniqueArgs>;

export const DiceRollLogFindUniqueZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema }).strict();