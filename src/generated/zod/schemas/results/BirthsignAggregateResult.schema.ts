import { z } from 'zod';
export const BirthsignAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sign: z.number(),
    disposition: z.number(),
    characters: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    sign: z.string().nullable(),
    disposition: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    sign: z.string().nullable(),
    disposition: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});