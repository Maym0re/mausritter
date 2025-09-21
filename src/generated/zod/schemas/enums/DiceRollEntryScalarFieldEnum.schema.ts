import { z } from 'zod';

export const DiceRollEntryScalarFieldEnumSchema = z.enum(['id', 'logId', 'order', 'type', 'value', 'sides', 'createdAt'])

export type DiceRollEntryScalarFieldEnum = z.infer<typeof DiceRollEntryScalarFieldEnumSchema>;