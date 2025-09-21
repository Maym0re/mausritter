import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  q: SortOrderSchema.optional(),
  r: SortOrderSchema.optional(),
  s: SortOrderSchema.optional()
}).strict();
export const HexCellAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexCellAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellAvgOrderByAggregateInput>;
export const HexCellAvgOrderByAggregateInputObjectZodSchema = makeSchema();
