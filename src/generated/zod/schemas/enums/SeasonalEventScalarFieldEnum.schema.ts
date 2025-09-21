import { z } from 'zod';

export const SeasonalEventScalarFieldEnumSchema = z.enum(['id', 'season', 'description', 'effect'])

export type SeasonalEventScalarFieldEnum = z.infer<typeof SeasonalEventScalarFieldEnumSchema>;