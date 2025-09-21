import { z } from 'zod';

import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const SeasonalEventInputSchema = z.object({
    id: z.string(),
    season: SeasonNameSchema,
    description: z.string(),
    effect: z.string().optional().nullable()
}).strict();

export type SeasonalEventInputType = z.infer<typeof SeasonalEventInputSchema>;
