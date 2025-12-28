import * as z from 'zod';
// prettier-ignore
export const ConditionModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    clearRequirement: z.string().nullable(),
    effects: z.array(z.string()),
    characters: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConditionPureType = z.infer<typeof ConditionModelSchema>;
