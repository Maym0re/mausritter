import { z } from 'zod';
import { SeasonalEventUpdateManyMutationInputObjectSchema } from './objects/SeasonalEventUpdateManyMutationInput.schema';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventUpdateManySchema = z.object({ data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional()  })