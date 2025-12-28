import * as z from 'zod';

export const HexMapScalarFieldEnumSchema = z.enum(['id', 'campaignId', 'size', 'centerX', 'centerY', 'createdAt', 'updatedAt'])

export type HexMapScalarFieldEnum = z.infer<typeof HexMapScalarFieldEnumSchema>;