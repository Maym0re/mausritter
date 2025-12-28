import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './InventoryItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InventoryItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => InventoryItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => InventoryItemWhereInputObjectSchema).optional()
}).strict();
export const InventoryItemListRelationFilterObjectSchema: z.ZodType<Prisma.InventoryItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemListRelationFilter>;
export const InventoryItemListRelationFilterObjectZodSchema = makeSchema();
