import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeUpdateManyMutationInputObjectSchema } from './objects/HexTypeUpdateManyMutationInput.schema';
import { HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeUpdateManyAndReturnSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional()  }).strict()