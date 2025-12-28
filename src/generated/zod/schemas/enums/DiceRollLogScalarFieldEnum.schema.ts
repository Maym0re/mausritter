import * as z from 'zod';

export const DiceRollLogScalarFieldEnumSchema = z.enum(['id', 'campaignId', 'userId', 'notation', 'total', 'createdAt'])

export type DiceRollLogScalarFieldEnum = z.infer<typeof DiceRollLogScalarFieldEnumSchema>;