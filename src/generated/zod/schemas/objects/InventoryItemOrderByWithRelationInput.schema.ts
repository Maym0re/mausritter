import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterOrderByWithRelationInputObjectSchema as CharacterOrderByWithRelationInputObjectSchema } from './CharacterOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  usage: SortOrderSchema.optional(),
  maxUsage: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slotType: SortOrderSchema.optional(),
  slotIndex: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InventoryItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InventoryItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemOrderByWithRelationInput>;
export const InventoryItemOrderByWithRelationInputObjectZodSchema = makeSchema();
