import { z } from 'zod';

// prettier-ignore
export const ConditionResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    clearRequirement: z.string().nullable(),
    effects: z.array(z.string()).array(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConditionResultType = z.infer<typeof ConditionResultSchema>;
