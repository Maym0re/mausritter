import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryCreateInputObjectSchema } from './objects/DiceRollEntryCreateInput.schema';
import { DiceRollEntryUncheckedCreateInputObjectSchema } from './objects/DiceRollEntryUncheckedCreateInput.schema';

export const DiceRollEntryCreateOneSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), data: z.union([DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema])  })