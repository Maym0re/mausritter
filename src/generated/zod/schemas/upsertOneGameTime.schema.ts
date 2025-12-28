import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema as GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeCreateInputObjectSchema as GameTimeCreateInputObjectSchema } from './objects/GameTimeCreateInput.schema';
import { GameTimeUncheckedCreateInputObjectSchema as GameTimeUncheckedCreateInputObjectSchema } from './objects/GameTimeUncheckedCreateInput.schema';
import { GameTimeUpdateInputObjectSchema as GameTimeUpdateInputObjectSchema } from './objects/GameTimeUpdateInput.schema';
import { GameTimeUncheckedUpdateInputObjectSchema as GameTimeUncheckedUpdateInputObjectSchema } from './objects/GameTimeUncheckedUpdateInput.schema';

export const GameTimeUpsertOneSchema: z.ZodType<Prisma.GameTimeUpsertArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema, create: z.union([ GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema ]), update: z.union([ GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GameTimeUpsertArgs>;

export const GameTimeUpsertOneZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema, create: z.union([ GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema ]), update: z.union([ GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema ]) }).strict();