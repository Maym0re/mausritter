import { z } from 'zod';
export const HexTypeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    color: z.number(),
    description: z.number(),
    landmarks: z.number(),
    HexCell: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional()});