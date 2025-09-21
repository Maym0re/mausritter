import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional(),
  centerX: z.literal(true).optional(),
  centerY: z.literal(true).optional()
}).strict();
export const HexMapAvgAggregateInputObjectSchema: z.ZodType<Prisma.HexMapAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexMapAvgAggregateInputType>;
export const HexMapAvgAggregateInputObjectZodSchema = makeSchema();
