import { z } from 'zod';

import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const WeatherEntryModelSchema = z.object({
    id: z.string(),
    season: SeasonNameSchema,
    roll: z.number().int(),
    weather: z.string(),
    isPoorCondition: z.boolean(),
    Campaign: z.array(z.unknown()).array()
}).strict();

export type WeatherEntryModelType = z.infer<typeof WeatherEntryModelSchema>;
