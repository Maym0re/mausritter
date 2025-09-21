import { z } from 'zod';

// prettier-ignore
export const DiceRollLogModelSchema = z.object({
    id: z.string(),
    campaignId: z.string(),
    campaign: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    notation: z.string(),
    total: z.number().int(),
    createdAt: z.date(),
    entries: z.array(z.unknown()).array()
}).strict();

export type DiceRollLogModelType = z.infer<typeof DiceRollLogModelSchema>;
