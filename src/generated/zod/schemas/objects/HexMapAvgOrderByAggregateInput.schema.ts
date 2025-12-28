import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional(),
  centerX: SortOrderSchema.optional(),
  centerY: SortOrderSchema.optional()
}).strict();
export const HexMapAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexMapAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapAvgOrderByAggregateInput>;
export const HexMapAvgOrderByAggregateInputObjectZodSchema = makeSchema();
