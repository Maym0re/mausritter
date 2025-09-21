import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  q: SortOrderSchema.optional(),
  r: SortOrderSchema.optional(),
  s: SortOrderSchema.optional()
}).strict();
export const HexCellSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexCellSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellSumOrderByAggregateInput>;
export const HexCellSumOrderByAggregateInputObjectZodSchema = makeSchema();
