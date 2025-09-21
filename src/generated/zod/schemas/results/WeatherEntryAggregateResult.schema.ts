import { z } from 'zod';
export const WeatherEntryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    season: z.number(),
    roll: z.number(),
    weather: z.number(),
    isPoorCondition: z.number(),
    Campaign: z.number()
  }).optional(),
  _sum: z.object({
    roll: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    roll: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    roll: z.number().int().nullable(),
    weather: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    roll: z.number().int().nullable(),
    weather: z.string().nullable()
  }).nullable().optional()});