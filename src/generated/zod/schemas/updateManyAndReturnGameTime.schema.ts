import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeUpdateManyMutationInputObjectSchema } from './objects/GameTimeUpdateManyMutationInput.schema';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeUpdateManyAndReturnSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional()  }).strict()