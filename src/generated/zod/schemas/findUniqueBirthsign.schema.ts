import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';

export const BirthsignFindUniqueSchema: z.ZodType<Prisma.BirthsignFindUniqueArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BirthsignFindUniqueArgs>;

export const BirthsignFindUniqueZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict();