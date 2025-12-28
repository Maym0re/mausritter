import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogSelectObjectSchema as DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema as DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCreateInputObjectSchema as DiceRollLogCreateInputObjectSchema } from './objects/DiceRollLogCreateInput.schema';
import { DiceRollLogUncheckedCreateInputObjectSchema as DiceRollLogUncheckedCreateInputObjectSchema } from './objects/DiceRollLogUncheckedCreateInput.schema';
import { DiceRollLogUpdateInputObjectSchema as DiceRollLogUpdateInputObjectSchema } from './objects/DiceRollLogUpdateInput.schema';
import { DiceRollLogUncheckedUpdateInputObjectSchema as DiceRollLogUncheckedUpdateInputObjectSchema } from './objects/DiceRollLogUncheckedUpdateInput.schema';

export const DiceRollLogUpsertOneSchema: z.ZodType<Prisma.DiceRollLogUpsertArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema, create: z.union([ DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DiceRollLogUpsertArgs>;

export const DiceRollLogUpsertOneZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema, create: z.union([ DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema ]) }).strict();