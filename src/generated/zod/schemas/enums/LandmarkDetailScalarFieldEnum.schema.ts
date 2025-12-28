import * as z from 'zod';

export const LandmarkDetailScalarFieldEnumSchema = z.enum(['id', 'description', 'effect', 'landmarkId'])

export type LandmarkDetailScalarFieldEnum = z.infer<typeof LandmarkDetailScalarFieldEnumSchema>;