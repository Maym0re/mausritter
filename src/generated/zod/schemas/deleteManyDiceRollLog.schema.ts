import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogDeleteManySchema: z.ZodType<Prisma.DiceRollLogDeleteManyArgs> = z.object({ where: DiceRollLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogDeleteManyArgs>;

export const DiceRollLogDeleteManyZodSchema = z.object({ where: DiceRollLogWhereInputObjectSchema.optional() }).strict();