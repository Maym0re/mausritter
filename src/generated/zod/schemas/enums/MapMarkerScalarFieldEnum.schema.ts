import * as z from 'zod';

export const MapMarkerScalarFieldEnumSchema = z.enum(['id', 'hexMapId', 'image', 'x', 'y', 'z', 'createdAt', 'updatedAt'])

export type MapMarkerScalarFieldEnum = z.infer<typeof MapMarkerScalarFieldEnumSchema>;