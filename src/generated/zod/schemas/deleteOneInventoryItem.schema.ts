import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema as InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';

export const InventoryItemDeleteOneSchema: z.ZodType<Prisma.InventoryItemDeleteArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InventoryItemDeleteArgs>;

export const InventoryItemDeleteOneZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema }).strict();