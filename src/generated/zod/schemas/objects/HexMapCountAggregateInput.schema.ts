import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  campaignId: z.literal(true).optional(),
  size: z.literal(true).optional(),
  centerX: z.literal(true).optional(),
  centerY: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const HexMapCountAggregateInputObjectSchema: z.ZodType<Prisma.HexMapCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCountAggregateInputType>;
export const HexMapCountAggregateInputObjectZodSchema = makeSchema();
