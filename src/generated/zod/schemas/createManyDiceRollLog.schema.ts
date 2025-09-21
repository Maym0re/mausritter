import { z } from 'zod';
import { DiceRollLogCreateManyInputObjectSchema } from './objects/DiceRollLogCreateManyInput.schema';

export const DiceRollLogCreateManySchema = z.object({ data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })