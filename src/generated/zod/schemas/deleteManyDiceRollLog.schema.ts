import { z } from 'zod';
import { DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogDeleteManySchema = z.object({ where: DiceRollLogWhereInputObjectSchema.optional()  })