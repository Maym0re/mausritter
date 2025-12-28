import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereInputObjectSchema as InventoryItemWhereInputObjectSchema } from './InventoryItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereInputObjectSchema).optional()
}).strict();
export const CharacterCountOutputTypeCountInventoryArgsObjectSchema = makeSchema();
export const CharacterCountOutputTypeCountInventoryArgsObjectZodSchema = makeSchema();
