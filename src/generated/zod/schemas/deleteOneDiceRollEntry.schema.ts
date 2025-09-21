import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';

export const DiceRollEntryDeleteOneSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema  })