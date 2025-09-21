import { z } from 'zod';
export const SettlementGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  governance: z.string(),
  inhabitants: z.string(),
  feature: z.string(),
  industry: z.string(),
  event: z.string(),
  population: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    size: z.number(),
    governance: z.number(),
    inhabitants: z.number(),
    feature: z.number(),
    industry: z.number(),
    event: z.number(),
    population: z.number(),
    HexCell: z.number()
  }).optional(),
  _sum: z.object({
    population: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    population: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    governance: z.string().nullable(),
    inhabitants: z.string().nullable(),
    feature: z.string().nullable(),
    industry: z.string().nullable(),
    event: z.string().nullable(),
    population: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    governance: z.string().nullable(),
    inhabitants: z.string().nullable(),
    feature: z.string().nullable(),
    industry: z.string().nullable(),
    event: z.string().nullable(),
    population: z.number().int().nullable()
  }).nullable().optional()
}));