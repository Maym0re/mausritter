import * as z from 'zod';
// prettier-ignore
export const CharacterInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    notes: z.string().optional().nullable(),
    playerId: z.string(),
    player: z.unknown(),
    campaignId: z.string(),
    campaign: z.unknown(),
    str: z.number().int(),
    dex: z.number().int(),
    wil: z.number().int(),
    hp: z.number().int(),
    maxHp: z.number().int(),
    backgroundId: z.string(),
    birthsignId: z.string(),
    coatId: z.string(),
    background: z.unknown(),
    birthsign: z.unknown(),
    coat: z.unknown(),
    physicalDetail: z.string().optional().nullable(),
    level: z.number().int(),
    xp: z.number().int(),
    grit: z.number().int(),
    pips: z.number().int(),
    inventory: z.array(z.unknown()),
    conditions: z.array(z.unknown()),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CharacterInputType = z.infer<typeof CharacterInputSchema>;
