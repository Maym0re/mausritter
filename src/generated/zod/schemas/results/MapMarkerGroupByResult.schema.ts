import { z } from 'zod';
export const MapMarkerGroupByResultSchema = z.array(z.object({
  id: z.string(),
  hexMapId: z.string(),
  image: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    hexMapId: z.number(),
    hexMap: z.number(),
    image: z.number(),
    x: z.number(),
    y: z.number(),
    z: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    x: z.number().nullable(),
    y: z.number().nullable(),
    z: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    x: z.number().nullable(),
    y: z.number().nullable(),
    z: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    hexMapId: z.string().nullable(),
    image: z.string().nullable(),
    x: z.number().nullable(),
    y: z.number().nullable(),
    z: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    hexMapId: z.string().nullable(),
    image: z.string().nullable(),
    x: z.number().nullable(),
    y: z.number().nullable(),
    z: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));