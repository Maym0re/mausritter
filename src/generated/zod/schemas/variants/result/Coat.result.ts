import { z } from 'zod';

// prettier-ignore
export const CoatResultSchema = z.object({
    id: z.string(),
    color: z.string(),
    pattern: z.string(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CoatResultType = z.infer<typeof CoatResultSchema>;
