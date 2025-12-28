import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  z: z.literal(true).optional()
}).strict();
export const MapMarkerAvgAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerAvgAggregateInputType>;
export const MapMarkerAvgAggregateInputObjectZodSchema = makeSchema();
