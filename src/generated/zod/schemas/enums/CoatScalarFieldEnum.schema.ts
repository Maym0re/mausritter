import * as z from 'zod';

export const CoatScalarFieldEnumSchema = z.enum(['id', 'color', 'pattern', 'createdAt', 'updatedAt'])

export type CoatScalarFieldEnum = z.infer<typeof CoatScalarFieldEnumSchema>;