import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterCreateManyInputObjectSchema } from './objects/CharacterCreateManyInput.schema';

export const CharacterCreateManyAndReturnSchema = z.object({ select: CharacterSelectObjectSchema.optional(), data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()