import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  q: z.literal(true).optional(),
  r: z.literal(true).optional(),
  s: z.literal(true).optional()
}).strict();
export const HexCellAvgAggregateInputObjectSchema: z.ZodType<Prisma.HexCellAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HexCellAvgAggregateInputType>;
export const HexCellAvgAggregateInputObjectZodSchema = makeSchema();
