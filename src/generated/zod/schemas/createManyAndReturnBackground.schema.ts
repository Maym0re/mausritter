import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundCreateManyInputObjectSchema as BackgroundCreateManyInputObjectSchema } from './objects/BackgroundCreateManyInput.schema';

export const BackgroundCreateManyAndReturnSchema: z.ZodType<Prisma.BackgroundCreateManyAndReturnArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundCreateManyAndReturnArgs>;

export const BackgroundCreateManyAndReturnZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();