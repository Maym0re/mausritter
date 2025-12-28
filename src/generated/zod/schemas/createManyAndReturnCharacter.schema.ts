import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterCreateManyInputObjectSchema as CharacterCreateManyInputObjectSchema } from './objects/CharacterCreateManyInput.schema';

export const CharacterCreateManyAndReturnSchema: z.ZodType<Prisma.CharacterCreateManyAndReturnArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CharacterCreateManyAndReturnArgs>;

export const CharacterCreateManyAndReturnZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();