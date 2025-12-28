import * as z from 'zod';
import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const CampaignModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    isActive: z.boolean(),
    gmId: z.string(),
    gm: z.unknown(),
    players: z.array(z.unknown()),
    characters: z.array(z.unknown()),
    gameTime: z.unknown().nullable(),
    season: SeasonNameSchema,
    weatherEntryId: z.string().nullable(),
    weatherEntry: z.unknown().nullable(),
    hexMap: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    todaysEvent: z.string().nullable(),
    diceRolls: z.array(z.unknown())
}).strict();

export type CampaignPureType = z.infer<typeof CampaignModelSchema>;
