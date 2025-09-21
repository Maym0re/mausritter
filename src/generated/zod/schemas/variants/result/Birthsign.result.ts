import { z } from 'zod';

// prettier-ignore
export const BirthsignResultSchema = z.object({
    id: z.string(),
    sign: z.string(),
    disposition: z.string(),
    characters: z.array(z.unknown()).array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BirthsignResultType = z.infer<typeof BirthsignResultSchema>;
