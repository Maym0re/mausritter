import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeUpdateInputObjectSchema } from './objects/GameTimeUpdateInput.schema';
import { GameTimeUncheckedUpdateInputObjectSchema } from './objects/GameTimeUncheckedUpdateInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeUpdateOneSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeUpdateInputObjectSchema, GameTimeUncheckedUpdateInputObjectSchema]), where: GameTimeWhereUniqueInputObjectSchema  })