import { z } from 'zod';
import { HexCellUpdateManyMutationInputObjectSchema } from './objects/HexCellUpdateManyMutationInput.schema';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellUpdateManySchema = z.object({ data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional()  })