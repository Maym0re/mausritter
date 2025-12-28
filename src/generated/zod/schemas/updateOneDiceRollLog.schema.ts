import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogSelectObjectSchema as DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema as DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogUpdateInputObjectSchema as DiceRollLogUpdateInputObjectSchema } from './objects/DiceRollLogUpdateInput.schema';
import { DiceRollLogUncheckedUpdateInputObjectSchema as DiceRollLogUncheckedUpdateInputObjectSchema } from './objects/DiceRollLogUncheckedUpdateInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';

export const DiceRollLogUpdateOneSchema: z.ZodType<Prisma.DiceRollLogUpdateArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema]), where: DiceRollLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiceRollLogUpdateArgs>;

export const DiceRollLogUpdateOneZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema]), where: DiceRollLogWhereUniqueInputObjectSchema }).strict();