import * as z from 'zod';
import { SeasonNameSchema } from '../../enums/SeasonName.schema';
// prettier-ignore
export const CampaignInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    isActive: z.boolean(),
    gmId: z.string(),
    gm: z.unknown(),
    players: z.array(z.unknown()),
    characters: z.array(z.unknown()),
    gameTime: z.unknown().optional().nullable(),
    season: SeasonNameSchema,
    weatherEntryId: z.string().optional().nullable(),
    weatherEntry: z.unknown().optional().nullable(),
    hexMap: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    todaysEvent: z.string().optional().nullable(),
    diceRolls: z.array(z.unknown())
}).strict();

export type CampaignInputType = z.infer<typeof CampaignInputSchema>;
