import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';

export const CharacterFindUniqueSchema: z.ZodType<Prisma.CharacterFindUniqueArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacterFindUniqueArgs>;

export const CharacterFindUniqueZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict();