import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional(),
  centerX: z.literal(true).optional(),
  centerY: z.literal(true).optional()
}).strict();
export const HexMapSumAggregateInputObjectSchema: z.ZodType<Prisma.HexMapSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexMapSumAggregateInputType>;
export const HexMapSumAggregateInputObjectZodSchema = makeSchema();
