import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignCreateInputObjectSchema as BirthsignCreateInputObjectSchema } from './objects/BirthsignCreateInput.schema';
import { BirthsignUncheckedCreateInputObjectSchema as BirthsignUncheckedCreateInputObjectSchema } from './objects/BirthsignUncheckedCreateInput.schema';

export const BirthsignCreateOneSchema: z.ZodType<Prisma.BirthsignCreateArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BirthsignCreateArgs>;

export const BirthsignCreateOneZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), include: BirthsignIncludeObjectSchema.optional(), data: z.union([BirthsignCreateInputObjectSchema, BirthsignUncheckedCreateInputObjectSchema]) }).strict();