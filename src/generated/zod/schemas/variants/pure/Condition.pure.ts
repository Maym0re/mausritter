import { z } from 'zod';

// prettier-ignore
export const ConditionModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    clearRequirement: z.string().nullable(),
    effects: z.array(z.string()).array(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConditionModelType = z.infer<typeof ConditionModelSchema>;
