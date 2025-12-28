import * as z from 'zod';
export const LandmarkAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    hexTypeId: z.number(),
    hexType: z.number(),
    details: z.number(),
    HexCell: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    hexTypeId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    hexTypeId: z.string().nullable()
  }).nullable().optional()});