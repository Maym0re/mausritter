import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapCreateManyInputObjectSchema } from './objects/HexMapCreateManyInput.schema';

export const HexMapCreateManyAndReturnSchema = z.object({ select: HexMapSelectObjectSchema.optional(), data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()