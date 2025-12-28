import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeSelectObjectSchema as GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeCreateManyInputObjectSchema as GameTimeCreateManyInputObjectSchema } from './objects/GameTimeCreateManyInput.schema';

export const GameTimeCreateManyAndReturnSchema: z.ZodType<Prisma.GameTimeCreateManyAndReturnArgs> = z.object({ select: GameTimeSelectObjectSchema.optional(), data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeCreateManyAndReturnArgs>;

export const GameTimeCreateManyAndReturnZodSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();