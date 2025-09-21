import { z } from 'zod';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';

export const GameTimeDeleteManySchema = z.object({ where: GameTimeWhereInputObjectSchema.optional()  })