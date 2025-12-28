import * as z from 'zod';
export const DiceRollEntryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    logId: z.number(),
    log: z.number(),
    order: z.number(),
    type: z.number(),
    value: z.number(),
    sides: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable(),
    value: z.number().nullable(),
    sides: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable(),
    value: z.number().nullable(),
    sides: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    logId: z.string().nullable(),
    order: z.number().int().nullable(),
    type: z.string().nullable(),
    value: z.number().int().nullable(),
    sides: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    logId: z.string().nullable(),
    order: z.number().int().nullable(),
    type: z.string().nullable(),
    value: z.number().int().nullable(),
    sides: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});