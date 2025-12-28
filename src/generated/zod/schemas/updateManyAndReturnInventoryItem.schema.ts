import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemUpdateManyMutationInputObjectSchema as InventoryItemUpdateManyMutationInputObjectSchema } from './objects/InventoryItemUpdateManyMutationInput.schema';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemUpdateManyAndReturnSchema: z.ZodType<Prisma.InventoryItemUpdateManyAndReturnArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemUpdateManyAndReturnArgs>;

export const InventoryItemUpdateManyAndReturnZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional() }).strict();