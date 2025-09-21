import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema'

const nestedenumslottypefilterSchema = z.object({
  equals: SlotTypeSchema.optional(),
  in: SlotTypeSchema.array().optional(),
  notIn: SlotTypeSchema.array().optional(),
  not: z.union([SlotTypeSchema, z.lazy(() => NestedEnumSlotTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSlotTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSlotTypeFilter> = nestedenumslottypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSlotTypeFilter>;
export const NestedEnumSlotTypeFilterObjectZodSchema = nestedenumslottypefilterSchema;
