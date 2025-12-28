import * as z from 'zod';

export const MapImageScalarFieldEnumSchema = z.enum(['id', 'hexMapId', 'data', 'x', 'y', 'width', 'height', 'createdAt', 'updatedAt'])

export type MapImageScalarFieldEnum = z.infer<typeof MapImageScalarFieldEnumSchema>;