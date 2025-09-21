import { z } from 'zod';
import { ConditionCreateManyInputObjectSchema } from './objects/ConditionCreateManyInput.schema';

export const ConditionCreateManySchema = z.object({ data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })