import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeUpdateManyMutationInputObjectSchema as GameTimeUpdateManyMutationInputObjectSchema } from './objects/GameTimeUpdateManyMutationInput.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeUpdateManySchema: z.ZodType<Prisma.GameTimeUpdateManyArgs> = z.object({ data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeUpdateManyArgs>;

export const GameTimeUpdateManyZodSchema = z.object({ data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional() }).strict();