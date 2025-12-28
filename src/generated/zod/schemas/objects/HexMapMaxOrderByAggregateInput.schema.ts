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
export const HexMapMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexMapMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapMaxOrderByAggregateInput>;
export const HexMapMaxOrderByAggregateInputObjectZodSchema = makeSchema();
