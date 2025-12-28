import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeUpdateManyMutationInputObjectSchema as GameTimeUpdateManyMutationInputObjectSchema } from './objects/GameTimeUpdateManyMutationInput.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeUpdateManyAndReturnSchema: z.ZodType<Prisma.GameTimeUpdateManyAndReturnArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeUpdateManyAndReturnArgs>;

export const GameTimeUpdateManyAndReturnZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional() }).strict();