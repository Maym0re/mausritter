import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundCreateManyInputObjectSchema } from './objects/BackgroundCreateManyInput.schema';

export const BackgroundCreateManyAndReturnSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), data: z.union([ BackgroundCreateManyInputObjectSchema, z.array(BackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()