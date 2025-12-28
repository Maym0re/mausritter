import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema as GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeUpdateInputObjectSchema as GameTimeUpdateInputObjectSchema } from './objects/GameTimeUpdateInput.schema';
import { GameTimeUncheckedUpdateInputObjectSchema as GameTimeUncheckedUpdateInputObjectSchema } from './objects/GameTimeUncheckedUpdateInput.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeUpdateOneSchema: z.ZodType<Prisma.GameTimeUpdateArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema]), where: GameTimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameTimeUpdateArgs>;

export const GameTimeUpdateOneZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema]), where: GameTimeWhereUniqueInputObjectSchema }).strict();