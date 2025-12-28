import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntryWhereInputObjectSchema as DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryDeleteManySchema: z.ZodType<Prisma.DiceRollEntryDeleteManyArgs> = z.object({ where: DiceRollEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryDeleteManyArgs>;

export const DiceRollEntryDeleteManyZodSchema = z.object({ where: DiceRollEntryWhereInputObjectSchema.optional() }).strict();