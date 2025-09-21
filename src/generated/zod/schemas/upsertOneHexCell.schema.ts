import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';
import { HexCellCreateInputObjectSchema } from './objects/HexCellCreateInput.schema';
import { HexCellUncheckedCreateInputObjectSchema } from './objects/HexCellUncheckedCreateInput.schema';
import { HexCellUpdateInputObjectSchema } from './objects/HexCellUpdateInput.schema';
import { HexCellUncheckedUpdateInputObjectSchema } from './objects/HexCellUncheckedUpdateInput.schema';

export const HexCellUpsertSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema, create: z.union([ HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema ]), update: z.union([ HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema ])  })