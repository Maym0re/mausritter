import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional()
}).strict();
export const SeasonalEventMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeasonalEventMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventMaxOrderByAggregateInput>;
export const SeasonalEventMaxOrderByAggregateInputObjectZodSchema = makeSchema();
