import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InventoryItemCreateManyInputObjectSchema as InventoryItemCreateManyInputObjectSchema } from './objects/InventoryItemCreateManyInput.schema';

export const InventoryItemCreateManySchema: z.ZodType<Prisma.InventoryItemCreateManyArgs> = z.object({ data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InventoryItemCreateManyArgs>;

export const InventoryItemCreateManyZodSchema = z.object({ data: z.union([ InventoryItemCreateManyInputObjectSchema, z.array(InventoryItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();