import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './objects/HexCellUpdateManyMutationInput.schema';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellUpdateManyAndReturnSchema = z.object({ select: HexCellSelectObjectSchema.optional(), data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional()  }).strict()