import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventUpdateInputObjectSchema } from './objects/SeasonalEventUpdateInput.schema';
import { SeasonalEventUncheckedUpdateInputObjectSchema } from './objects/SeasonalEventUncheckedUpdateInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventUpdateOneSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema]), where: SeasonalEventWhereUniqueInputObjectSchema  })