import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatCreateManyInputObjectSchema } from './objects/CoatCreateManyInput.schema';

export const CoatCreateManyAndReturnSchema = z.object({ select: CoatSelectObjectSchema.optional(), data: z.union([ CoatCreateManyInputObjectSchema, z.array(CoatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()