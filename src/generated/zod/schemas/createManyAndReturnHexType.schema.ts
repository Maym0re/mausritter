import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeCreateManyInputObjectSchema } from './objects/HexTypeCreateManyInput.schema';

export const HexTypeCreateManyAndReturnSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()