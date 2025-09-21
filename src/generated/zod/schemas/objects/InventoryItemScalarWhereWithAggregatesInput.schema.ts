import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumSlotTypeWithAggregatesFilterObjectSchema } from './EnumSlotTypeWithAggregatesFilter.schema';
import { SlotTypeSchema } from '../enums/SlotType.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const inventoryitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  usage: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  maxUsage: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  value: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  slotType: z.union([z.lazy(() => EnumSlotTypeWithAggregatesFilterObjectSchema), SlotTypeSchema]).optional(),
  slotIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InventoryItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InventoryItemScalarWhereWithAggregatesInput> = inventoryitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InventoryItemScalarWhereWithAggregatesInput>;
export const InventoryItemScalarWhereWithAggregatesInputObjectZodSchema = inventoryitemscalarwherewithaggregatesinputSchema;
