import { z } from 'zod';

export const HexCellScalarFieldEnumSchema = z.enum(['id', 'hexMapId', 'q', 'r', 's', 'hexTypeId', 'landmarkId', 'landmarkDetailId', 'settlementId', 'isRevealed', 'notes', 'customName', 'masterNotes', 'createdAt', 'updatedAt'])

export type HexCellScalarFieldEnum = z.infer<typeof HexCellScalarFieldEnumSchema>;