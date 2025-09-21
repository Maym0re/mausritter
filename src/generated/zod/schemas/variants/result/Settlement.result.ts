import { z } from 'zod';

import { SettlementSizeSchema } from '../../enums/SettlementSize.schema';
// prettier-ignore
export const SettlementResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    size: SettlementSizeSchema,
    governance: z.string(),
    inhabitants: z.string(),
    feature: z.string(),
    industry: z.string(),
    event: z.string(),
    population: z.number().int(),
    HexCell: z.array(z.unknown()).array()
}).strict();

export type SettlementResultType = z.infer<typeof SettlementResultSchema>;
