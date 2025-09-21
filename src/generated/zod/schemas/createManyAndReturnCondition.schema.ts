import { z } from 'zod';
import { ConditionSelectObjectSchema } from './objects/ConditionSelect.schema';
import { ConditionCreateManyInputObjectSchema } from './objects/ConditionCreateManyInput.schema';

export const ConditionCreateManyAndReturnSchema = z.object({ select: ConditionSelectObjectSchema.optional(), data: z.union([ ConditionCreateManyInputObjectSchema, z.array(ConditionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()