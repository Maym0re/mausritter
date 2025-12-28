import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryCreateInputObjectSchema as DiceRollEntryCreateInputObjectSchema } from './objects/DiceRollEntryCreateInput.schema';
import { DiceRollEntryUncheckedCreateInputObjectSchema as DiceRollEntryUncheckedCreateInputObjectSchema } from './objects/DiceRollEntryUncheckedCreateInput.schema';
import { DiceRollEntryUpdateInputObjectSchema as DiceRollEntryUpdateInputObjectSchema } from './objects/DiceRollEntryUpdateInput.schema';
import { DiceRollEntryUncheckedUpdateInputObjectSchema as DiceRollEntryUncheckedUpdateInputObjectSchema } from './objects/DiceRollEntryUncheckedUpdateInput.schema';

export const DiceRollEntryUpsertOneSchema: z.ZodType<Prisma.DiceRollEntryUpsertArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema, create: z.union([ DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryUpsertArgs>;

export const DiceRollEntryUpsertOneZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema, create: z.union([ DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema ]) }).strict();