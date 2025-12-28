import * as z from 'zod';
export const InventoryItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    characterId: z.number(),
    character: z.number(),
    name: z.number(),
    type: z.number(),
    size: z.number(),
    usage: z.number(),
    maxUsage: z.number(),
    description: z.number(),
    value: z.number(),
    slotType: z.number(),
    slotIndex: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable(),
    usage: z.number().nullable(),
    maxUsage: z.number().nullable(),
    value: z.number().nullable(),
    slotIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable(),
    usage: z.number().nullable(),
    maxUsage: z.number().nullable(),
    value: z.number().nullable(),
    slotIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    size: z.number().int().nullable(),
    usage: z.number().int().nullable(),
    maxUsage: z.number().int().nullable(),
    description: z.string().nullable(),
    value: z.number().int().nullable(),
    slotIndex: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    size: z.number().int().nullable(),
    usage: z.number().int().nullable(),
    maxUsage: z.number().int().nullable(),
    description: z.string().nullable(),
    value: z.number().int().nullable(),
    slotIndex: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});