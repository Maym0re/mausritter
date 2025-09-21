import { z } from 'zod';
import { CoatCreateManyInputObjectSchema } from './objects/CoatCreateManyInput.schema';

export const CoatCreateManySchema = z.object({ data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })