import * as z from 'zod';
// prettier-ignore
export const CoatModelSchema = z.object({
    id: z.string(),
    color: z.string(),
    pattern: z.string(),
    characters: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CoatPureType = z.infer<typeof CoatModelSchema>;
