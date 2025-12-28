import * as z from 'zod';

export const SettlementScalarFieldEnumSchema = z.enum(['id', 'name', 'size', 'governance', 'inhabitants', 'feature', 'industry', 'event', 'population'])

export type SettlementScalarFieldEnum = z.infer<typeof SettlementScalarFieldEnumSchema>;