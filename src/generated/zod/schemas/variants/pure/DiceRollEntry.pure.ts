import { z } from 'zod';

// prettier-ignore
export const DiceRollEntryModelSchema = z.object({
    id: z.string(),
    logId: z.string(),
    log: z.unknown(),
    order: z.number().int(),
    type: z.string(),
    value: z.number().int(),
    sides: z.number().int().nullable(),
    createdAt: z.date()
}).strict();

export type DiceRollEntryModelType = z.infer<typeof DiceRollEntryModelSchema>;
