import { z } from 'zod';

export const WeatherEntryScalarFieldEnumSchema = z.enum(['id', 'season', 'roll', 'weather', 'isPoorCondition'])

export type WeatherEntryScalarFieldEnum = z.infer<typeof WeatherEntryScalarFieldEnumSchema>;