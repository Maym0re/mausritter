import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogCreateManyInputObjectSchema } from './objects/DiceRollLogCreateManyInput.schema';

export const DiceRollLogCreateManyAndReturnSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()