import { z } from 'zod';
import { HexMapCreateManyInputObjectSchema } from './objects/HexMapCreateManyInput.schema';

export const HexMapCreateManySchema = z.object({ data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })