import { z } from 'zod';
import { BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignCreateManyInputObjectSchema } from './objects/BirthsignCreateManyInput.schema';

export const BirthsignCreateManyAndReturnSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), data: z.union([ BirthsignCreateManyInputObjectSchema, z.array(BirthsignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()