import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const SeasonalEventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SeasonalEventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventOrderByWithRelationInput>;
export const SeasonalEventOrderByWithRelationInputObjectZodSchema = makeSchema();
