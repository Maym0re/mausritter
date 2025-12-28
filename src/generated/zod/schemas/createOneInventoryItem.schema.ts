import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema as InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemCreateInputObjectSchema as InventoryItemCreateInputObjectSchema } from './objects/InventoryItemCreateInput.schema';
import { InventoryItemUncheckedCreateInputObjectSchema as InventoryItemUncheckedCreateInputObjectSchema } from './objects/InventoryItemUncheckedCreateInput.schema';

export const InventoryItemCreateOneSchema: z.ZodType<Prisma.InventoryItemCreateArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InventoryItemCreateArgs>;

export const InventoryItemCreateOneZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), data: z.union([InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema]) }).strict();