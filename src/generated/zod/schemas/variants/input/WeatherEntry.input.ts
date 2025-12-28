import * as z from 'zod';
import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const WeatherEntryInputSchema = z.object({
    id: z.string(),
    season: SeasonNameSchema,
    roll: z.number().int(),
    weather: z.string(),
    isPoorCondition: z.boolean(),
    Campaign: z.array(z.unknown())
}).strict();

export type WeatherEntryInputType = z.infer<typeof WeatherEntryInputSchema>;
