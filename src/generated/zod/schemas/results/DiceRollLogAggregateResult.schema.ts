import { z } from 'zod';
export const DiceRollLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    campaignId: z.number(),
    campaign: z.number(),
    userId: z.number(),
    user: z.number(),
    notation: z.number(),
    total: z.number(),
    createdAt: z.number(),
    entries: z.number()
  }).optional(),
  _sum: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    userId: z.string().nullable(),
    notation: z.string().nullable(),
    total: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    userId: z.string().nullable(),
    notation: z.string().nullable(),
    total: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});