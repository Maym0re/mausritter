import { z } from 'zod';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapDeleteManySchema = z.object({ where: HexMapWhereInputObjectSchema.optional()  })