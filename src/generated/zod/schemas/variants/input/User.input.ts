import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    ownedCampaigns: z.array(z.unknown()),
    characters: z.array(z.unknown()),
    playerIn: z.array(z.unknown()),
    diceRollLogs: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
