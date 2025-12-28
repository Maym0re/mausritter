import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumSlotTypeFilterObjectSchema as EnumSlotTypeFilterObjectSchema } from './EnumSlotTypeFilter.schema';
import { SlotTypeSchema } from '../enums/SlotType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterScalarRelationFilterObjectSchema as CharacterScalarRelationFilterObjectSchema } from './CharacterScalarRelationFilter.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const inventoryitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryItemWhereInputObjectSchema), z.lazy(() => InventoryItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryItemWhereInputObjectSchema), z.lazy(() => InventoryItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  usage: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxUsage: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  value: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  slotType: z.union([z.lazy(() => EnumSlotTypeFilterObjectSchema), SlotTypeSchema]).optional(),
  slotIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional()
}).strict();
export const InventoryItemWhereInputObjectSchema: z.ZodType<Prisma.InventoryItemWhereInput> = inventoryitemwhereinputSchema as unknown as z.ZodType<Prisma.InventoryItemWhereInput>;
export const InventoryItemWhereInputObjectZodSchema = inventoryitemwhereinputSchema;
