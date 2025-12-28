import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemUpdateManyMutationInputObjectSchema as InventoryItemUpdateManyMutationInputObjectSchema } from './objects/InventoryItemUpdateManyMutationInput.schema';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemUpdateManySchema: z.ZodType<Prisma.InventoryItemUpdateManyArgs> = z.object({ data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemUpdateManyArgs>;

export const InventoryItemUpdateManyZodSchema = z.object({ data: InventoryItemUpdateManyMutationInputObjectSchema, where: InventoryItemWhereInputObjectSchema.optional() }).strict();