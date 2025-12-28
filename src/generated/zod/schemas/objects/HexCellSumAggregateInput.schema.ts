import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  q: z.literal(true).optional(),
  r: z.literal(true).optional(),
  s: z.literal(true).optional()
}).strict();
export const HexCellSumAggregateInputObjectSchema: z.ZodType<Prisma.HexCellSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexCellSumAggregateInputType>;
export const HexCellSumAggregateInputObjectZodSchema = makeSchema();
