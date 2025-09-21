import { z } from 'zod';
import { BackgroundCreateManyInputObjectSchema } from './objects/BackgroundCreateManyInput.schema';

export const BackgroundCreateManySchema = z.object({ data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })