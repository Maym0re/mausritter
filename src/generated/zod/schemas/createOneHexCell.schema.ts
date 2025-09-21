import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellCreateInputObjectSchema } from './objects/HexCellCreateInput.schema';
import { HexCellUncheckedCreateInputObjectSchema } from './objects/HexCellUncheckedCreateInput.schema';

export const HexCellCreateOneSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema])  })