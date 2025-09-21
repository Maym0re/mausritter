import { z } from 'zod';
import { HexTypeCreateManyInputObjectSchema } from './objects/HexTypeCreateManyInput.schema';

export const HexTypeCreateManySchema = z.object({ data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })