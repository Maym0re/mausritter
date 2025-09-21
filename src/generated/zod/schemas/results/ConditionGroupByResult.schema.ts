import { z } from 'zod';
export const ConditionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  clearRequirement: z.string(),
  effects: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    clearRequirement: z.number(),
    effects: z.number(),
    characters: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    clearRequirement: z.string().nullable(),
    effects: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    clearRequirement: z.string().nullable(),
    effects: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));