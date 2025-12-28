import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionUpdateInputObjectSchema as ConditionUpdateInputObjectSchema } from './objects/ConditionUpdateInput.schema';
import { ConditionUncheckedUpdateInputObjectSchema as ConditionUncheckedUpdateInputObjectSchema } from './objects/ConditionUncheckedUpdateInput.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionUpdateOneSchema: z.ZodType<Prisma.ConditionUpdateArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema]), where: ConditionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConditionUpdateArgs>;

export const ConditionUpdateOneZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema]), where: ConditionWhereUniqueInputObjectSchema }).strict();