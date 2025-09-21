import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  hexMapId: z.literal(true).optional(),
  image: z.literal(true).optional(),
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  z: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MapMarkerCountAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCountAggregateInputType>;
export const MapMarkerCountAggregateInputObjectZodSchema = makeSchema();
