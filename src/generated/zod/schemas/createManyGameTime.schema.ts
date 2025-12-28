import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeCreateManyInputObjectSchema as GameTimeCreateManyInputObjectSchema } from './objects/GameTimeCreateManyInput.schema';

export const GameTimeCreateManySchema: z.ZodType<Prisma.GameTimeCreateManyArgs> = z.object({ data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeCreateManyArgs>;

export const GameTimeCreateManyZodSchema = z.object({ data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();