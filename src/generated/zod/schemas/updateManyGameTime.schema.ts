import { z } from 'zod';
import { GameTimeUpdateManyMutationInputObjectSchema } from './objects/GameTimeUpdateManyMutationInput.schema';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeUpdateManySchema = z.object({ data: GameTimeUpdateManyMutationInputObjectSchema, where: GameTimeWhereInputObjectSchema.optional()  })