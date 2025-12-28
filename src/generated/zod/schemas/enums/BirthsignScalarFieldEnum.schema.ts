import * as z from 'zod';

export const BirthsignScalarFieldEnumSchema = z.enum(['id', 'sign', 'disposition', 'createdAt', 'updatedAt'])

export type BirthsignScalarFieldEnum = z.infer<typeof BirthsignScalarFieldEnumSchema>;