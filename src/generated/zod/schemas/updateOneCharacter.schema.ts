import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterUpdateInputObjectSchema as CharacterUpdateInputObjectSchema } from './objects/CharacterUpdateInput.schema';
import { CharacterUncheckedUpdateInputObjectSchema as CharacterUncheckedUpdateInputObjectSchema } from './objects/CharacterUncheckedUpdateInput.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';

export const CharacterUpdateOneSchema: z.ZodType<Prisma.CharacterUpdateArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema]), where: CharacterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacterUpdateArgs>;

export const CharacterUpdateOneZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema]), where: CharacterWhereUniqueInputObjectSchema }).strict();