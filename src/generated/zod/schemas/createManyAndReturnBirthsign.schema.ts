import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignCreateManyInputObjectSchema as BirthsignCreateManyInputObjectSchema } from './objects/BirthsignCreateManyInput.schema';

export const BirthsignCreateManyAndReturnSchema: z.ZodType<Prisma.BirthsignCreateManyAndReturnArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignCreateManyAndReturnArgs>;

export const BirthsignCreateManyAndReturnZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();