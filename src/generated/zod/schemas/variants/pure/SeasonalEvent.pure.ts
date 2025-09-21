import { z } from 'zod';

import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const SeasonalEventModelSchema = z.object({
    id: z.string(),
    season: SeasonNameSchema,
    description: z.string(),
    effect: z.string().nullable()
}).strict();

export type SeasonalEventModelType = z.infer<typeof SeasonalEventModelSchema>;
