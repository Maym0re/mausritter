import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  z: z.literal(true).optional()
}).strict();
export const MapMarkerSumAggregateInputObjectSchema: z.ZodType<Prisma.MapMarkerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerSumAggregateInputType>;
export const MapMarkerSumAggregateInputObjectZodSchema = makeSchema();
