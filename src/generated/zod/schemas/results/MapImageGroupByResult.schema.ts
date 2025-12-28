import * as z from 'zod';
export const MapImageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  hexMapId: z.string(),
  data: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    hexMapId: z.number(),
    hexMap: z.number(),
    data: z.number(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    x: z.number().nullable(),
    y: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    x: z.number().nullable(),
    y: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    hexMapId: z.string().nullable(),
    data: z.string().nullable(),
    x: z.number().nullable(),
    y: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    hexMapId: z.string().nullable(),
    data: z.string().nullable(),
    x: z.number().nullable(),
    y: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));