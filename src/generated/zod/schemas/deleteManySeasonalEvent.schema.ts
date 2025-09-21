import { z } from 'zod';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventDeleteManySchema = z.object({ where: SeasonalEventWhereInputObjectSchema.optional()  })