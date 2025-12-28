import * as z from 'zod';

export const GameTimeScalarFieldEnumSchema = z.enum(['id', 'campaignId', 'rounds', 'turns', 'watches', 'days', 'createdAt', 'updatedAt'])

export type GameTimeScalarFieldEnum = z.infer<typeof GameTimeScalarFieldEnumSchema>;