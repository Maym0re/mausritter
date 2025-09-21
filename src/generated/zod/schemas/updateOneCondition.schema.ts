import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionUpdateInputObjectSchema } from './objects/ConditionUpdateInput.schema';
import { ConditionUncheckedUpdateInputObjectSchema } from './objects/ConditionUncheckedUpdateInput.schema';
import { ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionUpdateOneSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), data: z.union([ConditionUpdateInputObjectSchema, ConditionUncheckedUpdateInputObjectSchema]), where: ConditionWhereUniqueInputObjectSchema  })