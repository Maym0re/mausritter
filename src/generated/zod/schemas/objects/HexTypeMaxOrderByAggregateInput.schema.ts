import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  description: SortOrderSchema.optional()
}).strict();
export const HexTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HexTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeMaxOrderByAggregateInput>;
export const HexTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
