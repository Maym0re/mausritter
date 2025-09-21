import { z } from 'zod';
import { DiceRollEntryUpdateManyMutationInputObjectSchema } from './objects/DiceRollEntryUpdateManyMutationInput.schema';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryUpdateManySchema = z.object({ data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional()  })