import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryUpdateManyMutationInputObjectSchema as DiceRollEntryUpdateManyMutationInputObjectSchema } from './objects/DiceRollEntryUpdateManyMutationInput.schema';
import { DiceRollEntryWhereInputObjectSchema as DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryUpdateManyAndReturnSchema: z.ZodType<Prisma.DiceRollEntryUpdateManyAndReturnArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateManyAndReturnArgs>;

export const DiceRollEntryUpdateManyAndReturnZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional() }).strict();