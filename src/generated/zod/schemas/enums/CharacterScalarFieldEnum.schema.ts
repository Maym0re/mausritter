import { z } from 'zod';

export const CharacterScalarFieldEnumSchema = z.enum(['id', 'name', 'notes', 'playerId', 'campaignId', 'str', 'dex', 'wil', 'hp', 'maxHp', 'backgroundId', 'birthsignId', 'coatId', 'physicalDetail', 'level', 'xp', 'grit', 'pips', 'isActive', 'createdAt', 'updatedAt'])

export type CharacterScalarFieldEnum = z.infer<typeof CharacterScalarFieldEnumSchema>;