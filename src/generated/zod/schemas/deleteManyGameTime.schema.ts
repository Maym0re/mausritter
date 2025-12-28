import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeDeleteManySchema: z.ZodType<Prisma.GameTimeDeleteManyArgs> = z.object({ where: GameTimeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeDeleteManyArgs>;

export const GameTimeDeleteManyZodSchema = z.object({ where: GameTimeWhereInputObjectSchema.optional() }).strict();