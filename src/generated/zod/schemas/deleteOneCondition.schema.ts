import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionDeleteOneSchema: z.ZodType<Prisma.ConditionDeleteArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConditionDeleteArgs>;

export const ConditionDeleteOneZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict();