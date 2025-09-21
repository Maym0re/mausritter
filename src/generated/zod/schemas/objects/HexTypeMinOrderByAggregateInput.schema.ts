import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  description: SortOrderSchema.optional()
}).strict();
export const HexTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeMinOrderByAggregateInput>;
export const HexTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
