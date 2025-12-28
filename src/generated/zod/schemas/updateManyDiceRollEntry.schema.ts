import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntryUpdateManyMutationInputObjectSchema as DiceRollEntryUpdateManyMutationInputObjectSchema } from './objects/DiceRollEntryUpdateManyMutationInput.schema';
import { DiceRollEntryWhereInputObjectSchema as DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryUpdateManySchema: z.ZodType<Prisma.DiceRollEntryUpdateManyArgs> = z.object({ data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateManyArgs>;

export const DiceRollEntryUpdateManyZodSchema = z.object({ data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional() }).strict();