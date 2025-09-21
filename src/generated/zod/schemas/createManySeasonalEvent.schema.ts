import { z } from 'zod';
import { SeasonalEventCreateManyInputObjectSchema } from './objects/SeasonalEventCreateManyInput.schema';

export const SeasonalEventCreateManySchema = z.object({ data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })