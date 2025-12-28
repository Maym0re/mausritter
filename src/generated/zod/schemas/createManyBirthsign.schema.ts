import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignCreateManyInputObjectSchema as BirthsignCreateManyInputObjectSchema } from './objects/BirthsignCreateManyInput.schema';

export const BirthsignCreateManySchema: z.ZodType<Prisma.BirthsignCreateManyArgs> = z.object({ data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignCreateManyArgs>;

export const BirthsignCreateManyZodSchema = z.object({ data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();