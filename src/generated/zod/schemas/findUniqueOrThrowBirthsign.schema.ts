import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';

export const BirthsignFindUniqueOrThrowSchema: z.ZodType<Prisma.BirthsignFindUniqueOrThrowArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BirthsignFindUniqueOrThrowArgs>;

export const BirthsignFindUniqueOrThrowZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict();