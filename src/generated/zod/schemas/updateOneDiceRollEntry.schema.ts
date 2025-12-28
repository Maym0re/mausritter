import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryUpdateInputObjectSchema as DiceRollEntryUpdateInputObjectSchema } from './objects/DiceRollEntryUpdateInput.schema';
import { DiceRollEntryUncheckedUpdateInputObjectSchema as DiceRollEntryUncheckedUpdateInputObjectSchema } from './objects/DiceRollEntryUncheckedUpdateInput.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryUpdateOneSchema: z.ZodType<Prisma.DiceRollEntryUpdateArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema]), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateArgs>;

export const DiceRollEntryUpdateOneZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema]), where: DiceRollEntryWhereUniqueInputObjectSchema }).strict();