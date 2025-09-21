import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventDeleteOneSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema  })