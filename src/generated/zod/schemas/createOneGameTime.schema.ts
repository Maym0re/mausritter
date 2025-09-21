import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeCreateInputObjectSchema } from './objects/GameTimeCreateInput.schema';
import { GameTimeUncheckedCreateInputObjectSchema } from './objects/GameTimeUncheckedCreateInput.schema';

export const GameTimeCreateOneSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), data: z.union([GameTimeCreateInputObjectSchema, GameTimeUncheckedCreateInputObjectSchema])  })