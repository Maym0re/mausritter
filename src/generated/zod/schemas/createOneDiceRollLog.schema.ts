import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogSelectObjectSchema as DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema as DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogCreateInputObjectSchema as DiceRollLogCreateInputObjectSchema } from './objects/DiceRollLogCreateInput.schema';
import { DiceRollLogUncheckedCreateInputObjectSchema as DiceRollLogUncheckedCreateInputObjectSchema } from './objects/DiceRollLogUncheckedCreateInput.schema';

export const DiceRollLogCreateOneSchema: z.ZodType<Prisma.DiceRollLogCreateArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DiceRollLogCreateArgs>;

export const DiceRollLogCreateOneZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema]) }).strict();