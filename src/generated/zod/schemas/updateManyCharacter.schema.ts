import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './objects/CharacterUpdateManyMutationInput.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';

export const CharacterUpdateManySchema: z.ZodType<Prisma.CharacterUpdateManyArgs> = z.object({ data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacterUpdateManyArgs>;

export const CharacterUpdateManyZodSchema = z.object({ data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional() }).strict();