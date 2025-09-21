import { z } from 'zod';
export const HexMapAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    campaignId: z.number(),
    campaign: z.number(),
    size: z.number(),
    centerX: z.number(),
    centerY: z.number(),
    cells: z.number(),
    images: z.number(),
    markers: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable(),
    centerX: z.number().nullable(),
    centerY: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable(),
    centerX: z.number().nullable(),
    centerY: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    size: z.number().int().nullable(),
    centerX: z.number().int().nullable(),
    centerY: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    campaignId: z.string().nullable(),
    size: z.number().int().nullable(),
    centerX: z.number().int().nullable(),
    centerY: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});