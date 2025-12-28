import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemIncludeObjectSchema as InventoryItemIncludeObjectSchema } from './objects/InventoryItemInclude.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './objects/InventoryItemWhereUniqueInput.schema';
import { InventoryItemCreateInputObjectSchema as InventoryItemCreateInputObjectSchema } from './objects/InventoryItemCreateInput.schema';
import { InventoryItemUncheckedCreateInputObjectSchema as InventoryItemUncheckedCreateInputObjectSchema } from './objects/InventoryItemUncheckedCreateInput.schema';
import { InventoryItemUpdateInputObjectSchema as InventoryItemUpdateInputObjectSchema } from './objects/InventoryItemUpdateInput.schema';
import { InventoryItemUncheckedUpdateInputObjectSchema as InventoryItemUncheckedUpdateInputObjectSchema } from './objects/InventoryItemUncheckedUpdateInput.schema';

export const InventoryItemUpsertOneSchema: z.ZodType<Prisma.InventoryItemUpsertArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema, create: z.union([ InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InventoryItemUpsertArgs>;

export const InventoryItemUpsertOneZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), include: InventoryItemIncludeObjectSchema.optional(), where: InventoryItemWhereUniqueInputObjectSchema, create: z.union([ InventoryItemCreateInputObjectSchema, InventoryItemUncheckedCreateInputObjectSchema ]), update: z.union([ InventoryItemUpdateInputObjectSchema, InventoryItemUncheckedUpdateInputObjectSchema ]) }).strict();