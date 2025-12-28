import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';

export const CharacterFindUniqueOrThrowSchema: z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs>;

export const CharacterFindUniqueOrThrowZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema }).strict();