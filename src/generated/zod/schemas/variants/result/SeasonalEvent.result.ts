import { z } from 'zod';

import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const SeasonalEventResultSchema = z.object({
    id: z.string(),
    season: SeasonNameSchema,
    description: z.string(),
    effect: z.string().nullable()
}).strict();

export type SeasonalEventResultType = z.infer<typeof SeasonalEventResultSchema>;
