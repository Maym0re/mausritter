import * as z from 'zod';
// prettier-ignore
export const HexCellInputSchema = z.object({
    id: z.string(),
    hexMapId: z.string(),
    hexMap: z.unknown(),
    q: z.number().int(),
    r: z.number().int(),
    s: z.number().int(),
    hexTypeId: z.string(),
    hexType: z.unknown(),
    landmarkId: z.string().optional().nullable(),
    landmark: z.unknown().optional().nullable(),
    landmarkDetailId: z.string().optional().nullable(),
    landmarkDetail: z.unknown().optional().nullable(),
    settlementId: z.string().optional().nullable(),
    settlement: z.unknown().optional().nullable(),
    isRevealed: z.boolean(),
    notes: z.string(),
    customName: z.string().optional().nullable(),
    masterNotes: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type HexCellInputType = z.infer<typeof HexCellInputSchema>;
