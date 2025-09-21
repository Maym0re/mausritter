import { z } from 'zod';
import { HexTypeUpdateManyMutationInputObjectSchema } from './objects/HexTypeUpdateManyMutationInput.schema';
import { HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeUpdateManySchema = z.object({ data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional()  })