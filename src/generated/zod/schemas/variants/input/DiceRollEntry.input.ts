import { z } from 'zod';

// prettier-ignore
export const DiceRollEntryInputSchema = z.object({
    id: z.string(),
    logId: z.string(),
    log: z.unknown(),
    order: z.number().int(),
    type: z.string(),
    value: z.number().int(),
    sides: z.number().int().optional().nullable(),
    createdAt: z.date()
}).strict();

export type DiceRollEntryInputType = z.infer<typeof DiceRollEntryInputSchema>;
