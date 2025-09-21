import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSlotTypeFilterObjectSchema } from './NestedEnumSlotTypeFilter.schema'

const nestedenumslottypewithaggregatesfilterSchema = z.object({
  equals: SlotTypeSchema.optional(),
  in: SlotTypeSchema.array().optional(),
  notIn: SlotTypeSchema.array().optional(),
  not: z.union([SlotTypeSchema, z.lazy(() => NestedEnumSlotTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSlotTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSlotTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSlotTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSlotTypeWithAggregatesFilter> = nestedenumslottypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSlotTypeWithAggregatesFilter>;
export const NestedEnumSlotTypeWithAggregatesFilterObjectZodSchema = nestedenumslottypewithaggregatesfilterSchema;
