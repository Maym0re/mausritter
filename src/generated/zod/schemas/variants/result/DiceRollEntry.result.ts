import * as z from 'zod';
// prettier-ignore
export const DiceRollEntryResultSchema = z.object({
    id: z.string(),
    logId: z.string(),
    log: z.unknown(),
    order: z.number().int(),
    type: z.string(),
    value: z.number().int(),
    sides: z.number().int().nullable(),
    createdAt: z.date()
}).strict();

export type DiceRollEntryResultType = z.infer<typeof DiceRollEntryResultSchema>;
