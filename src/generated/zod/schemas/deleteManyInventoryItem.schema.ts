import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './objects/InventoryItemWhereInput.schema';

export const InventoryItemDeleteManySchema: z.ZodType<Prisma.InventoryItemDeleteManyArgs> = z.object({ where: InventoryItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemDeleteManyArgs>;

export const InventoryItemDeleteManyZodSchema = z.object({ where: InventoryItemWhereInputObjectSchema.optional() }).strict();