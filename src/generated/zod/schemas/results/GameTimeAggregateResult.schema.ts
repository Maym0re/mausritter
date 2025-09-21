import { z } from 'zod';
export const GameTimeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    campaignId: z.number(),
    campaign: z.number(),
    rounds: z.number(),
    turns: z.number(),
    watches: z.number(),
    days: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    rounds: z.number().nullable(),
    turns: z.number().nullable(),
    watches: z.number().nullable(),
    days: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    rounds: z.number().nullable(),
    turns: z.number().nullable(),
    watches: z.number().nullable(),
    days: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    rounds: z.number().int().nullable(),
    turns: z.number().int().nullable(),
    watches: z.number().int().nullable(),
    days: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    rounds: z.number().int().nullable(),
    turns: z.number().int().nullable(),
    watches: z.number().int().nullable(),
    days: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});