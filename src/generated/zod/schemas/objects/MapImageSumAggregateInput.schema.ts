import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  x: z.literal(true).optional(),
  y: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional()
}).strict();
export const MapImageSumAggregateInputObjectSchema: z.ZodType<Prisma.MapImageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MapImageSumAggregateInputType>;
export const MapImageSumAggregateInputObjectZodSchema = makeSchema();
