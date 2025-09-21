import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';

export const ConditionDeleteOneSchema = z.object({ select: ConditionSelectObjectSchema.optional(), include: ConditionIncludeObjectSchema.optional(), where: ConditionWhereUniqueInputObjectSchema  })