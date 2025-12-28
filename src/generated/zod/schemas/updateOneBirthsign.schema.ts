import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignUpdateInputObjectSchema as BirthsignUpdateInputObjectSchema } from './objects/BirthsignUpdateInput.schema';
import { BirthsignUncheckedUpdateInputObjectSchema as BirthsignUncheckedUpdateInputObjectSchema } from './objects/BirthsignUncheckedUpdateInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';

export const BirthsignUpdateOneSchema: z.ZodType<Prisma.BirthsignUpdateArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema]), where: BirthsignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BirthsignUpdateArgs>;

export const BirthsignUpdateOneZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema]), where: BirthsignWhereUniqueInputObjectSchema }).strict();