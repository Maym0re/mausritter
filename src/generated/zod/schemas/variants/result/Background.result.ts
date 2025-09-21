import { z } from 'zod';

// prettier-ignore
export const BackgroundResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BackgroundResultType = z.infer<typeof BackgroundResultSchema>;
