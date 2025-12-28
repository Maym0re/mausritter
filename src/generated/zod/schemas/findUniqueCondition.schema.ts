import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionFindUniqueSchema: z.ZodType<Prisma.ConditionFindUniqueArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConditionFindUniqueArgs>;

export const ConditionFindUniqueZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict();