import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryFindUniqueSchema: z.ZodType<Prisma.DiceRollEntryFindUniqueArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryFindUniqueArgs>;

export const DiceRollEntryFindUniqueZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict();