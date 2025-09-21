import { z } from 'zod';
import { HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeDeleteManySchema = z.object({ where: HexTypeWhereInputObjectSchema.optional()  })