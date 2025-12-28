import * as z from 'zod';
// prettier-ignore
export const GameTimeModelSchema = z.object({
    id: z.string(),
    campaignId: z.string(),
    campaign: z.unknown(),
    rounds: z.number().int(),
    turns: z.number().int(),
    watches: z.number().int(),
    days: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GameTimePureType = z.infer<typeof GameTimeModelSchema>;
