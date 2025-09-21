import { z } from 'zod';
export const HexTypeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));