import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryUpdateManyMutationInputObjectSchema } from './objects/DiceRollEntryUpdateManyMutationInput.schema';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryUpdateManyAndReturnSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: DiceRollEntryUpdateManyMutationInputObjectSchema, where: DiceRollEntryWhereInputObjectSchema.optional()  }).strict()