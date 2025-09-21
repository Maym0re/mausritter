import { z } from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.date(),
  image: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    emailVerified: z.number(),
    image: z.number(),
    password: z.number(),
    accounts: z.number(),
    sessions: z.number(),
    ownedCampaigns: z.number(),
    characters: z.number(),
    playerIn: z.number(),
    diceRollLogs: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));