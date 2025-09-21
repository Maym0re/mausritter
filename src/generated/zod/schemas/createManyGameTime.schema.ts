import { z } from 'zod';
import { GameTimeCreateManyInputObjectSchema } from './objects/GameTimeCreateManyInput.schema';

export const GameTimeCreateManySchema = z.object({ data: z.union([ GameTimeCreateManyInputObjectSchema, z.array(GameTimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })