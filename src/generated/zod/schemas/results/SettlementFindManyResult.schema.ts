import * as z from 'zod';
export const SettlementFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});