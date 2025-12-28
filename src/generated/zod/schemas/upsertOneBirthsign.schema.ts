import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignCreateInputObjectSchema as BirthsignCreateInputObjectSchema } from './objects/BirthsignCreateInput.schema';
import { BirthsignUncheckedCreateInputObjectSchema as BirthsignUncheckedCreateInputObjectSchema } from './objects/BirthsignUncheckedCreateInput.schema';
import { BirthsignUpdateInputObjectSchema as BirthsignUpdateInputObjectSchema } from './objects/BirthsignUpdateInput.schema';
import { BirthsignUncheckedUpdateInputObjectSchema as BirthsignUncheckedUpdateInputObjectSchema } from './objects/BirthsignUncheckedUpdateInput.schema';

export const BirthsignUpsertOneSchema: z.ZodType<Prisma.BirthsignUpsertArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema, create: z.union([ BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema ]), update: z.union([ BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BirthsignUpsertArgs>;

export const BirthsignUpsertOneZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema, create: z.union([ BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema ]), update: z.union([ BirthsignUpdateInputObjectSchema, BirthsignUncheckedUpdateInputObjectSchema ]) }).strict();