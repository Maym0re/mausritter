import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionUpdateManyMutationInputObjectSchema } from './objects/ConditionUpdateManyMutationInput.schema';
import { ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionUpdateManyAndReturnSchema = z.object({ select: ConditionSelectObjectSchema.optional(), data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional()  }).strict()