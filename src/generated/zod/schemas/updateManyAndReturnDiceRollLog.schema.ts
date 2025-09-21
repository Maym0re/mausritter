import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogUpdateManyMutationInputObjectSchema } from './objects/DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogUpdateManyAndReturnSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional()  }).strict()