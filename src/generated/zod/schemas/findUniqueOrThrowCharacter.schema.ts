import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';

export const CharacterFindUniqueOrThrowSchema: z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs>;

export const CharacterFindUniqueOrThrowZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict();