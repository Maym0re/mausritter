import * as z from 'zod';

export const SettlementSizeSchema = z.enum(['FARM', 'CROSSROADS', 'HAMLET', 'VILLAGE', 'TOWN', 'CITY'])

export type SettlementSize = z.infer<typeof SettlementSizeSchema>;