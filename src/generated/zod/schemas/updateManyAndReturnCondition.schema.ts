import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionUpdateManyMutationInputObjectSchema as ConditionUpdateManyMutationInputObjectSchema } from './objects/ConditionUpdateManyMutationInput.schema';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionUpdateManyAndReturnSchema: z.ZodType<Prisma.ConditionUpdateManyAndReturnArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConditionUpdateManyAndReturnArgs>;

export const ConditionUpdateManyAndReturnZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional() }).strict();