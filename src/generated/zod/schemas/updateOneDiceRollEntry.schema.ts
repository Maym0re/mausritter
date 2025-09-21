import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryUpdateInputObjectSchema } from './objects/DiceRollEntryUpdateInput.schema';
import { DiceRollEntryUncheckedUpdateInputObjectSchema } from './objects/DiceRollEntryUncheckedUpdateInput.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryUpdateOneSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema]), where: DiceRollEntryWhereUniqueInputObjectSchema  })