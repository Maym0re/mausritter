import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';

export const GameTimeDeleteOneSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), include: GameTimeIncludeObjectSchema.optional(), where: GameTimeWhereUniqueInputObjectSchema  })