import { z } from 'zod';

export const BackgroundScalarFieldEnumSchema = z.enum(['id', 'name', 'itemA', 'itemB', 'createdAt', 'updatedAt'])

export type BackgroundScalarFieldEnum = z.infer<typeof BackgroundScalarFieldEnumSchema>;