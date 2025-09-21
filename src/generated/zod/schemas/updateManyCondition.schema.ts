import { z } from 'zod';
import { ConditionUpdateManyMutationInputObjectSchema } from './objects/ConditionUpdateManyMutationInput.schema';
import { ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionUpdateManySchema = z.object({ data: ConditionUpdateManyMutationInputObjectSchema, where: ConditionWhereInputObjectSchema.optional()  })