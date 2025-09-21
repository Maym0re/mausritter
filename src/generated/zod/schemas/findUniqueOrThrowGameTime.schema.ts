import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeFindUniqueOrThrowSchema: z.ZodType<Prisma.GameTimeFindUniqueOrThrowArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameTimeFindUniqueOrThrowArgs>;

export const GameTimeFindUniqueOrThrowZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict();