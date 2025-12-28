import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionFindUniqueOrThrowSchema: z.ZodType<Prisma.ConditionFindUniqueOrThrowArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConditionFindUniqueOrThrowArgs>;

export const ConditionFindUniqueOrThrowZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema }).strict();