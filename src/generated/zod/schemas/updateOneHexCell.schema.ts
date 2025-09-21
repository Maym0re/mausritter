import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellUpdateInputObjectSchema } from './objects/HexCellUpdateInput.schema';
import { HexCellUncheckedUpdateInputObjectSchema } from './objects/HexCellUncheckedUpdateInput.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';

export const HexCellUpdateOneSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema]), where: HexCellWhereUniqueInputObjectSchema  })