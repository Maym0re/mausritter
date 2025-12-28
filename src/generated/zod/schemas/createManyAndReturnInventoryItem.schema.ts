import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemSelectObjectSchema as InventoryItemSelectObjectSchema } from './objects/InventoryItemSelect.schema';
import { InventoryItemCreateManyInputObjectSchema as InventoryItemCreateManyInputObjectSchema } from './objects/InventoryItemCreateManyInput.schema';

export const InventoryItemCreateManyAndReturnSchema: z.ZodType<Prisma.InventoryItemCreateManyAndReturnArgs> = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemCreateManyAndReturnArgs>;

export const InventoryItemCreateManyAndReturnZodSchema = z.object({ select: InventoryItemSelectObjectSchema.optional(), data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();