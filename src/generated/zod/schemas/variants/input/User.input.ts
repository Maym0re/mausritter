import { z } from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    accounts: z.array(z.unknown()).array(),
    sessions: z.array(z.unknown()).array(),
    ownedCampaigns: z.array(z.unknown()).array(),
    characters: z.array(z.unknown()).array(),
    playerIn: z.array(z.unknown()).array(),
    diceRollLogs: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
