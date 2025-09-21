import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryCreateManyInputObjectSchema } from './objects/DiceRollEntryCreateManyInput.schema';

export const DiceRollEntryCreateManyAndReturnSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()