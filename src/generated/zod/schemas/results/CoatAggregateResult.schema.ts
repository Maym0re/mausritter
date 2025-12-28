import * as z from 'zod';
export const CoatAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    color: z.number(),
    pattern: z.number(),
    characters: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    color: z.string().nullable(),
    pattern: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    color: z.string().nullable(),
    pattern: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});