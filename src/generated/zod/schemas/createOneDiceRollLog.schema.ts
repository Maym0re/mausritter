import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogCreateInputObjectSchema } from './objects/DiceRollLogCreateInput.schema';
import { DiceRollLogUncheckedCreateInputObjectSchema } from './objects/DiceRollLogUncheckedCreateInput.schema';

export const DiceRollLogCreateOneSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema])  })