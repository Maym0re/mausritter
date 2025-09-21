import { z } from 'zod';
import { DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';

export const DiceRollEntryDeleteManySchema = z.object({ where: DiceRollEntryWhereInputObjectSchema.optional()  })