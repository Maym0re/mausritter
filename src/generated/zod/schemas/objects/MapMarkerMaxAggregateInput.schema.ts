import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  hexMapId: z.literal(true).optional(),
  image: z.literal(true).optional(),
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  z: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MapMarkerMaxAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerMaxAggregateInputType>;
export const MapMarkerMaxAggregateInputObjectZodSchema = makeSchema();
