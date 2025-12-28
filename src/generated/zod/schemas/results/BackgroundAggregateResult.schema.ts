import * as z from 'zod';
export const BackgroundAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    itemA: z.number(),
    itemB: z.number(),
    characters: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    itemA: z.string().nullable(),
    itemB: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    itemA: z.string().nullable(),
    itemB: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});