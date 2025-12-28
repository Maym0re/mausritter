import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignUpdateManyMutationInputObjectSchema as BirthsignUpdateManyMutationInputObjectSchema } from './objects/BirthsignUpdateManyMutationInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignUpdateManySchema: z.ZodType<Prisma.BirthsignUpdateManyArgs> = z.object({ data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignUpdateManyArgs>;

export const BirthsignUpdateManyZodSchema = z.object({ data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional() }).strict();