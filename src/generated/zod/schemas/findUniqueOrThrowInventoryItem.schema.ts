import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemFindUniqueOrThrowSchema: z.ZodType<Prisma.InventoryItemFindUniqueOrThrowArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryItemFindUniqueOrThrowArgs>;

export const InventoryItemFindUniqueOrThrowZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict();