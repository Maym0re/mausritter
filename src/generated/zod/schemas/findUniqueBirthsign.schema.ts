import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';

export const BirthsignFindUniqueSchema: z.ZodType<Prisma.BirthsignFindUniqueArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BirthsignFindUniqueArgs>;

export const BirthsignFindUniqueZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), where: BirthsignWhereUniqueInputObjectSchema }).strict();