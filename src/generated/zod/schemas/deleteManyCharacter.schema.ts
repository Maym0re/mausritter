import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';

export const CharacterDeleteManySchema: z.ZodType<Prisma.CharacterDeleteManyArgs> = z.object({ where: CharacterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacterDeleteManyArgs>;

export const CharacterDeleteManyZodSchema = z.object({ where: CharacterWhereInputObjectSchema.optional() }).strict();