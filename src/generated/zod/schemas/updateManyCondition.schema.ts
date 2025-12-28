import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionUpdateManyMutationInputObjectSchema as ConditionUpdateManyMutationInputObjectSchema } from './objects/ConditionUpdateManyMutationInput.schema';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionUpdateManySchema: z.ZodType<Prisma.ConditionUpdateManyArgs> = z.object({ data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConditionUpdateManyArgs>;

export const ConditionUpdateManyZodSchema = z.object({ data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional() }).strict();