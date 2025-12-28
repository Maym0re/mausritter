import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional()
}).strict();
export const SeasonalEventMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeasonalEventMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventMinOrderByAggregateInput>;
export const SeasonalEventMinOrderByAggregateInputObjectZodSchema = makeSchema();
