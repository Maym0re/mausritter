import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';

export const DiceRollLogDeleteOneSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema  })