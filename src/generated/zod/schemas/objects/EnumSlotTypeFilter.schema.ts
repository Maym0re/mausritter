import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SlotTypeSchema } from '../enums/SlotType.schema';
import { NestedEnumSlotTypeFilterObjectSchema as NestedEnumSlotTypeFilterObjectSchema } from './NestedEnumSlotTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SlotTypeSchema.optional(),
  in: SlotTypeSchema.array().optional(),
  notIn: SlotTypeSchema.array().optional(),
  not: z.union([SlotTypeSchema, z.lazy(() => NestedEnumSlotTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumSlotTypeFilterObjectSchema: z.ZodType<Prisma.EnumSlotTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSlotTypeFilter>;
export const EnumSlotTypeFilterObjectZodSchema = makeSchema();
