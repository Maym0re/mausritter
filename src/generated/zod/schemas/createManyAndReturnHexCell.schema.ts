import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellCreateManyInputObjectSchema } from './objects/HexCellCreateManyInput.schema';

export const HexCellCreateManyAndReturnSchema = z.object({ select: HexCellSelectObjectSchema.optional(), data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()