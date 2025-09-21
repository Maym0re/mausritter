import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeCreateInputObjectSchema } from './objects/GameTimeCreateInput.schema';
import { GameTimeUncheckedCreateInputObjectSchema } from './objects/GameTimeUncheckedCreateInput.schema';
import { GameTimeUpdateInputObjectSchema } from './objects/GameTimeUpdateInput.schema';
import { GameTimeUncheckedUpdateInputObjectSchema } from './objects/GameTimeUncheckedUpdateInput.schema';

export const GameTimeUpsertSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema, create: z.union([ GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema ]), update: z.union([ GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema ])  })