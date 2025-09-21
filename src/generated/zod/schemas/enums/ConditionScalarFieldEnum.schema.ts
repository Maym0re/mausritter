import { z } from 'zod';

export const ConditionScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'clearRequirement', 'effects', 'createdAt', 'updatedAt'])

export type ConditionScalarFieldEnum = z.infer<typeof ConditionScalarFieldEnumSchema>;