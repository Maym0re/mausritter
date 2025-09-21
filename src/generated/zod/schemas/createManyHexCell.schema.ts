import { z } from 'zod';
import { HexCellCreateManyInputObjectSchema } from './objects/HexCellCreateManyInput.schema';

export const HexCellCreateManySchema = z.object({ data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })