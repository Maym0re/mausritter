import { z } from 'zod';

// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    password: z.string().nullable(),
    accounts: z.array(z.unknown()).array(),
    sessions: z.array(z.unknown()).array(),
    ownedCampaigns: z.array(z.unknown()).array(),
    characters: z.array(z.unknown()).array(),
    playerIn: z.array(z.unknown()).array(),
    diceRollLogs: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserModelType = z.infer<typeof UserModelSchema>;
