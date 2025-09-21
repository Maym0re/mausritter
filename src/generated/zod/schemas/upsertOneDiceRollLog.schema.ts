import { z } from 'zod';
import { DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCreateInputObjectSchema } from './objects/DiceRollLogCreateInput.schema';
import { DiceRollLogUncheckedCreateInputObjectSchema } from './objects/DiceRollLogUncheckedCreateInput.schema';
import { DiceRollLogUpdateInputObjectSchema } from './objects/DiceRollLogUpdateInput.schema';
import { DiceRollLogUncheckedUpdateInputObjectSchema } from './objects/DiceRollLogUncheckedUpdateInput.schema';

export const DiceRollLogUpsertSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), include: DiceRollLogIncludeObjectSchema.optional(), where: DiceRollLogWhereUniqueInputObjectSchema, create: z.union([ DiceRollLogCreateInputObjectSchema, DiceRollLogUncheckedCreateInputObjectSchema ]), update: z.union([ DiceRollLogUpdateInputObjectSchema, DiceRollLogUncheckedUpdateInputObjectSchema ])  })