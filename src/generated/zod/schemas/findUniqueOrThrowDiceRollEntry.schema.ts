import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryFindUniqueOrThrowSchema: z.ZodType<Prisma.DiceRollEntryFindUniqueOrThrowArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryFindUniqueOrThrowArgs>;

export const DiceRollEntryFindUniqueOrThrowZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict();