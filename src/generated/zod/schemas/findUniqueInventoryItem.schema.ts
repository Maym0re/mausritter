import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemFindUniqueSchema: z.ZodType<Prisma.InventoryItemFindUniqueArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryItemFindUniqueArgs>;

export const InventoryItemFindUniqueZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict();