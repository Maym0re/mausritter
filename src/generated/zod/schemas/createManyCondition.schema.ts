import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionCreateManyInputObjectSchema as ConditionCreateManyInputObjectSchema } from './objects/ConditionCreateManyInput.schema';

export const ConditionCreateManySchema: z.ZodType<Prisma.ConditionCreateManyArgs> = z.object({ data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConditionCreateManyArgs>;

export const ConditionCreateManyZodSchema = z.object({ data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();