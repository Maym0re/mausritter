import { z } from 'zod';
import { HexMapUpdateManyMutationInputObjectSchema } from './objects/HexMapUpdateManyMutationInput.schema';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapUpdateManySchema = z.object({ data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional()  })