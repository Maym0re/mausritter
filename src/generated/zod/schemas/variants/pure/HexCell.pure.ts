import * as z from 'zod';
// prettier-ignore
export const HexCellModelSchema = z.object({
    id: z.string(),
    hexMapId: z.string(),
    hexMap: z.unknown(),
    q: z.number().int(),
    r: z.number().int(),
    s: z.number().int(),
    hexTypeId: z.string(),
    hexType: z.unknown(),
    landmarkId: z.string().nullable(),
    landmark: z.unknown().nullable(),
    landmarkDetailId: z.string().nullable(),
    landmarkDetail: z.unknown().nullable(),
    settlementId: z.string().nullable(),
    settlement: z.unknown().nullable(),
    isRevealed: z.boolean(),
    notes: z.string(),
    customName: z.string().nullable(),
    masterNotes: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type HexCellPureType = z.infer<typeof HexCellModelSchema>;
