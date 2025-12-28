import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundCreateManyInputObjectSchema as BackgroundCreateManyInputObjectSchema } from './objects/BackgroundCreateManyInput.schema';

export const BackgroundCreateManySchema: z.ZodType<Prisma.BackgroundCreateManyArgs> = z.object({ data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundCreateManyArgs>;

export const BackgroundCreateManyZodSchema = z.object({ data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();