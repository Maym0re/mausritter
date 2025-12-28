import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryFindUniqueOrThrowSchema: z.ZodType<Prisma.DiceRollEntryFindUniqueOrThrowArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryFindUniqueOrThrowArgs>;

export const DiceRollEntryFindUniqueOrThrowZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict();