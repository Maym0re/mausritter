import { z } from 'zod';

export const HexTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'color', 'description'])

export type HexTypeScalarFieldEnum = z.infer<typeof HexTypeScalarFieldEnumSchema>;