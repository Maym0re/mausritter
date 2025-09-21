import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionCreateInputObjectSchema } from './objects/ConditionCreateInput.schema';
import { ConditionUncheckedCreateInputObjectSchema } from './objects/ConditionUncheckedCreateInput.schema';

export const ConditionCreateOneSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionCreateInputObjectSchema, ConditionUncheckedCreateInputObjectSchema])  })