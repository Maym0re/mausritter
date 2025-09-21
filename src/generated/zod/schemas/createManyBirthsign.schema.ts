import { z } from 'zod';
import { BirthsignCreateManyInputObjectSchema } from './objects/BirthsignCreateManyInput.schema';

export const BirthsignCreateManySchema = z.object({ data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })