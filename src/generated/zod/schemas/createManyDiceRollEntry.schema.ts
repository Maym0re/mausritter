import { z } from 'zod';
import { DiceRollEntryCreateManyInputObjectSchema } from './objects/DiceRollEntryCreateManyInput.schema';

export const DiceRollEntryCreateManySchema = z.object({ data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })