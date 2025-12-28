import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterSelectObjectSchema as CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './objects/CharacterUpdateManyMutationInput.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';

export const CharacterUpdateManyAndReturnSchema: z.ZodType<Prisma.CharacterUpdateManyAndReturnArgs> = z.object({ select: CharacterSelectObjectSchema.optional(), data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacterUpdateManyAndReturnArgs>;

export const CharacterUpdateManyAndReturnZodSchema = z.object({ select: CharacterSelectObjectSchema.optional(), data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional() }).strict();