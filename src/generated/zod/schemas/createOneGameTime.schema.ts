import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema as GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeCreateInputObjectSchema as GameTimeCreateInputObjectSchema } from './objects/GameTimeCreateInput.schema';
import { GameTimeUncheckedCreateInputObjectSchema as GameTimeUncheckedCreateInputObjectSchema } from './objects/GameTimeUncheckedCreateInput.schema';

export const GameTimeCreateOneSchema: z.ZodType<Prisma.GameTimeCreateArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GameTimeCreateArgs>;

export const GameTimeCreateOneZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema]) }).strict();