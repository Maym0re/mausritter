import { z } from 'zod';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellDeleteManySchema = z.object({ where: HexCellWhereInputObjectSchema.optional()  })