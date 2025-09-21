import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventCreateInputObjectSchema } from './objects/SeasonalEventCreateInput.schema';
import { SeasonalEventUncheckedCreateInputObjectSchema } from './objects/SeasonalEventUncheckedCreateInput.schema';

export const SeasonalEventCreateOneSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema])  })