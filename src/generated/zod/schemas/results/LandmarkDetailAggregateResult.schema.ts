import * as z from 'zod';
export const LandmarkDetailAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    description: z.number(),
    effect: z.number(),
    Landmark: z.number(),
    landmarkId: z.number(),
    HexCell: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    effect: z.string().nullable(),
    landmarkId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    effect: z.string().nullable(),
    landmarkId: z.string().nullable()
  }).nullable().optional()});