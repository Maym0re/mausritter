import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  hexMapId: z.literal(true).optional(),
  data: z.literal(true).optional(),
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MapImageMinAggregateInputObjectSchema: z.ZodType<Prisma.MapImageMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapImageMinAggregateInputType>;
export const MapImageMinAggregateInputObjectZodSchema = makeSchema();
