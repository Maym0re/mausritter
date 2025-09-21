import { z } from 'zod';
import { DiceRollLogUpdateManyMutationInputObjectSchema } from './objects/DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogUpdateManySchema = z.object({ data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional()  })