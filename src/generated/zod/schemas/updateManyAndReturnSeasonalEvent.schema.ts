import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventUpdateManyMutationInputObjectSchema } from './objects/SeasonalEventUpdateManyMutationInput.schema';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventUpdateManyAndReturnSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional()  }).strict()