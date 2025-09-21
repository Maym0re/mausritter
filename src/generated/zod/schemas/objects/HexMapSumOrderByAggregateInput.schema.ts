import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional(),
  centerX: SortOrderSchema.optional(),
  centerY: SortOrderSchema.optional()
}).strict();
export const HexMapSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexMapSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapSumOrderByAggregateInput>;
export const HexMapSumOrderByAggregateInputObjectZodSchema = makeSchema();
