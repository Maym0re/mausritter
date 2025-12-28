import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema as GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeDeleteOneSchema: z.ZodType<Prisma.GameTimeDeleteArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameTimeDeleteArgs>;

export const GameTimeDeleteOneZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict();