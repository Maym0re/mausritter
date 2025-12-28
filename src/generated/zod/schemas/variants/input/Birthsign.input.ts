import * as z from 'zod';
// prettier-ignore
export const BirthsignInputSchema = z.object({
    id: z.string(),
    sign: z.string(),
    disposition: z.string(),
    characters: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BirthsignInputType = z.infer<typeof BirthsignInputSchema>;
