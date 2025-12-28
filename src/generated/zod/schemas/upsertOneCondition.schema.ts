import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';
import { ConditionCreateInputObjectSchema as ConditionCreateInputObjectSchema } from './objects/ConditionCreateInput.schema';
import { ConditionUncheckedCreateInputObjectSchema as ConditionUncheckedCreateInputObjectSchema } from './objects/ConditionUncheckedCreateInput.schema';
import { ConditionUpdateInputObjectSchema as ConditionUpdateInputObjectSchema } from './objects/ConditionUpdateInput.schema';
import { ConditionUncheckedUpdateInputObjectSchema as ConditionUncheckedUpdateInputObjectSchema } from './objects/ConditionUncheckedUpdateInput.schema';

export const ConditionUpsertOneSchema: z.ZodType<Prisma.ConditionUpsertArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema, create: z.union([ ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema ]), update: z.union([ ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConditionUpsertArgs>;

export const ConditionUpsertOneZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema, create: z.union([ ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema ]), update: z.union([ ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema ]) }).strict();