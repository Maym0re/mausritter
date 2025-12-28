import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  campaignId: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  centerX: SortOrderSchema.optional(),
  centerY: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const HexMapMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexMapMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapMinOrderByAggregateInput>;
export const HexMapMinOrderByAggregateInputObjectZodSchema = makeSchema();
