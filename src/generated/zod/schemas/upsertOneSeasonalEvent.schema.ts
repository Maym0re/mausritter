import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventCreateInputObjectSchema } from './objects/SeasonalEventCreateInput.schema';
import { SeasonalEventUncheckedCreateInputObjectSchema } from './objects/SeasonalEventUncheckedCreateInput.schema';
import { SeasonalEventUpdateInputObjectSchema } from './objects/SeasonalEventUpdateInput.schema';
import { SeasonalEventUncheckedUpdateInputObjectSchema } from './objects/SeasonalEventUncheckedUpdateInput.schema';

export const SeasonalEventUpsertSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema, create: z.union([ SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema ]), update: z.union([ SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema ])  })