import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatCreateManyInputObjectSchema as CoatCreateManyInputObjectSchema } from './objects/CoatCreateManyInput.schema';

export const CoatCreateManyAndReturnSchema: z.ZodType<Prisma.CoatCreateManyAndReturnArgs> = z.object({ select: CoatSelectObjectSchema.optional(), data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CoatCreateManyAndReturnArgs>;

export const CoatCreateManyAndReturnZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();