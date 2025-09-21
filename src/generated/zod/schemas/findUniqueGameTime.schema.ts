import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeFindUniqueSchema: z.ZodType<Prisma.GameTimeFindUniqueArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameTimeFindUniqueArgs>;

export const GameTimeFindUniqueZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema }).strict();