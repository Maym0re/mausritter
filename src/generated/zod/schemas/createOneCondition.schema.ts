import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionSelectObjectSchema as ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionCreateInputObjectSchema as ConditionCreateInputObjectSchema } from './objects/ConditionCreateInput.schema';
import { ConditionUncheckedCreateInputObjectSchema as ConditionUncheckedCreateInputObjectSchema } from './objects/ConditionUncheckedCreateInput.schema';

export const ConditionCreateOneSchema: z.ZodType<Prisma.ConditionCreateArgs> = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConditionCreateArgs>;

export const ConditionCreateOneZodSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema]) }).strict();