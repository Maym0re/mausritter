import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionCreateManyInputObjectSchema as ConditionCreateManyInputObjectSchema } from './objects/ConditionCreateManyInput.schema';

export const ConditionCreateManyAndReturnSchema: z.ZodType<Prisma.ConditionCreateManyAndReturnArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConditionCreateManyAndReturnArgs>;

export const ConditionCreateManyAndReturnZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();