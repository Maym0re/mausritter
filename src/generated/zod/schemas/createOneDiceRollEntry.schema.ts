import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryCreateInputObjectSchema as DiceRollEntryCreateInputObjectSchema } from './objects/DiceRollEntryCreateInput.schema';
import { DiceRollEntryUncheckedCreateInputObjectSchema as DiceRollEntryUncheckedCreateInputObjectSchema } from './objects/DiceRollEntryUncheckedCreateInput.schema';

export const DiceRollEntryCreateOneSchema: z.ZodType<Prisma.DiceRollEntryCreateArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryCreateArgs>;

export const DiceRollEntryCreateOneZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema]) }).strict();