import { z } from 'zod';

// prettier-ignore
export const ConditionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    clearRequirement: z.string().optional().nullable(),
    effects: z.array(z.string()).array(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConditionInputType = z.infer<typeof ConditionInputSchema>;
