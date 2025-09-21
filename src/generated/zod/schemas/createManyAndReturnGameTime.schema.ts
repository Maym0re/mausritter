import { z } from 'zod';
import { GameTimeSelectObjectSchema } from './objects/GameTimeSelect.schema';
import { GameTimeCreateManyInputObjectSchema } from './objects/GameTimeCreateManyInput.schema';

export const GameTimeCreateManyAndReturnSchema = z.object({ select: GameTimeSelectObjectSchema.optional(), data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()