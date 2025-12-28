import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterCreateInputObjectSchema as CharacterCreateInputObjectSchema } from './objects/CharacterCreateInput.schema';
import { CharacterUncheckedCreateInputObjectSchema as CharacterUncheckedCreateInputObjectSchema } from './objects/CharacterUncheckedCreateInput.schema';
import { CharacterUpdateInputObjectSchema as CharacterUpdateInputObjectSchema } from './objects/CharacterUpdateInput.schema';
import { CharacterUncheckedUpdateInputObjectSchema as CharacterUncheckedUpdateInputObjectSchema } from './objects/CharacterUncheckedUpdateInput.schema';

export const CharacterUpsertOneSchema: z.ZodType<Prisma.CharacterUpsertArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema, create: z.union([ CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema ]), update: z.union([ CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CharacterUpsertArgs>;

export const CharacterUpsertOneZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema, create: z.union([ CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema ]), update: z.union([ CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema ]) }).strict();