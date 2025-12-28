import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterCreateManyInputObjectSchema as CharacterCreateManyInputObjectSchema } from './objects/CharacterCreateManyInput.schema';

export const CharacterCreateManySchema: z.ZodType<Prisma.CharacterCreateManyArgs> = z.object({ data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CharacterCreateManyArgs>;

export const CharacterCreateManyZodSchema = z.object({ data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();