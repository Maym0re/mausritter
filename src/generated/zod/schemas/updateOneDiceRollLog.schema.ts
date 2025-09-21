import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogUpdateInputObjectSchema } from './objects/DiceRollLogUpdateInput.schema';
import { DiceRollLogUncheckedUpdateInputObjectSchema } from './objects/DiceRollLogUncheckedUpdateInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';

export const DiceRollLogUpdateOneSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), data: z.union([DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema]), where: DiceRollLogWhereUniqueInputObjectSchema  })