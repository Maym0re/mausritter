import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';

export const HexCellDeleteOneSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema  })