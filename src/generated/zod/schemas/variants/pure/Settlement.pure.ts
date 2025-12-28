import * as z from 'zod';
import { SettlementSizeSchema } from '../../enums/SettlementSize.schema';
// prettier-ignore
export const SettlementModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    size: SettlementSizeSchema,
    governance: z.string(),
    inhabitants: z.string(),
    feature: z.string(),
    industry: z.string(),
    event: z.string(),
    population: z.number().int(),
    HexCell: z.array(z.unknown())
}).strict();

export type SettlementPureType = z.infer<typeof SettlementModelSchema>;
