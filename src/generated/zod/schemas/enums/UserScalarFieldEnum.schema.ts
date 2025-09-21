import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'password', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;