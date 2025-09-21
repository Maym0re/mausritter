import { z } from 'zod';
import { DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryCreateInputObjectSchema } from './objects/DiceRollEntryCreateInput.schema';
import { DiceRollEntryUncheckedCreateInputObjectSchema } from './objects/DiceRollEntryUncheckedCreateInput.schema';
import { DiceRollEntryUpdateInputObjectSchema } from './objects/DiceRollEntryUpdateInput.schema';
import { DiceRollEntryUncheckedUpdateInputObjectSchema } from './objects/DiceRollEntryUncheckedUpdateInput.schema';

export const DiceRollEntryUpsertSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), include: DiceRollEntryIncludeObjectSchema.optional(), where: DiceRollEntryWhereUniqueInputObjectSchema, create: z.union([ DiceRollEntryCreateInputObjectSchema, DiceRollEntryUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollEntryUpdateInputObjectSchema, DiceRollEntryUncheckedUpdateInputObjectSchema ])  })