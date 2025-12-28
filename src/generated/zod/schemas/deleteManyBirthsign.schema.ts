import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignDeleteManySchema: z.ZodType<Prisma.BirthsignDeleteManyArgs> = z.object({ where: BirthsignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignDeleteManyArgs>;

export const BirthsignDeleteManyZodSchema = z.object({ where: BirthsignWhereInputObjectSchema.optional() }).strict();