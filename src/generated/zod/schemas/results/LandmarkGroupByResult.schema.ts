import { z } from 'zod';
export const LandmarkGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  hexTypeId: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));