import { z } from 'zod';
export const SettlementUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.unknown(),
  governance: z.string(),
  inhabitants: z.string(),
  feature: z.string(),
  industry: z.string(),
  event: z.string(),
  population: z.number().int(),
  HexCell: z.array(z.unknown())
});