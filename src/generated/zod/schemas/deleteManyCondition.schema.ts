import { z } from 'zod';
import { ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionDeleteManySchema = z.object({ where: ConditionWhereInputObjectSchema.optional()  })