import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './objects/CharacterUpdateManyMutationInput.schema';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';

export const CharacterUpdateManyAndReturnSchema = z.object({ select: CharacterSelectObjectSchema.optional(), data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional()  }).strict()