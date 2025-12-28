import * as z from 'zod';

export const LandmarkScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'hexTypeId'])

export type LandmarkScalarFieldEnum = z.infer<typeof LandmarkScalarFieldEnumSchema>;