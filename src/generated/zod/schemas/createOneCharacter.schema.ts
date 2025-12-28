import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterCreateInputObjectSchema as CharacterCreateInputObjectSchema } from './objects/CharacterCreateInput.schema';
import { CharacterUncheckedCreateInputObjectSchema as CharacterUncheckedCreateInputObjectSchema } from './objects/CharacterUncheckedCreateInput.schema';

export const CharacterCreateOneSchema: z.ZodType<Prisma.CharacterCreateArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CharacterCreateArgs>;

export const CharacterCreateOneZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema]) }).strict();