import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  hexMapId: SortOrderSchema.optional(),
  q: SortOrderSchema.optional(),
  r: SortOrderSchema.optional(),
  s: SortOrderSchema.optional(),
  hexTypeId: SortOrderSchema.optional(),
  landmarkId: SortOrderSchema.optional(),
  landmarkDetailId: SortOrderSchema.optional(),
  settlementId: SortOrderSchema.optional(),
  isRevealed: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  customName: SortOrderSchema.optional(),
  masterNotes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const HexCellCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexCellCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCountOrderByAggregateInput>;
export const HexCellCountOrderByAggregateInputObjectZodSchema = makeSchema();
