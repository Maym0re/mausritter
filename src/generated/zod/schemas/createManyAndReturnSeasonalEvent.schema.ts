import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventCreateManyInputObjectSchema } from './objects/SeasonalEventCreateManyInput.schema';

export const SeasonalEventCreateManyAndReturnSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()