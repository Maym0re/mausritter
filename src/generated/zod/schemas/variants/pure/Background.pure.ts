import * as z from 'zod';
// prettier-ignore
export const BackgroundModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    characters: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BackgroundPureType = z.infer<typeof BackgroundModelSchema>;
