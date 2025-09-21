import { z } from 'zod';

import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const CampaignResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    isActive: z.boolean(),
    gmId: z.string(),
    gm: z.unknown(),
    players: z.array(z.unknown()).array(),
    characters: z.array(z.unknown()).array(),
    gameTime: z.unknown().nullable(),
    season: SeasonNameSchema,
    weatherEntryId: z.string().nullable(),
    weatherEntry: z.unknown().nullable(),
    hexMap: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    todaysEvent: z.string().nullable(),
    diceRolls: z.array(z.unknown()).array()
}).strict();

export type CampaignResultType = z.infer<typeof CampaignResultSchema>;
