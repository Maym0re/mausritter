import * as z from 'zod';

export const SeasonNameSchema = z.enum(['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'])

export type SeasonName = z.infer<typeof SeasonNameSchema>;