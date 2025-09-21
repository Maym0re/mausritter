import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';

export const CharacterFindUniqueSchema: z.ZodType<Prisma.CharacterFindUniqueArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacterFindUniqueArgs>;

export const CharacterFindUniqueZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict();