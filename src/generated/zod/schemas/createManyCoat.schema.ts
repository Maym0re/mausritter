import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatCreateManyInputObjectSchema as CoatCreateManyInputObjectSchema } from './objects/CoatCreateManyInput.schema';

export const CoatCreateManySchema: z.ZodType<Prisma.CoatCreateManyArgs> = z.object({ data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CoatCreateManyArgs>;

export const CoatCreateManyZodSchema = z.object({ data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();