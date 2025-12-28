import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemCreateWithoutCharacterInputObjectSchema as InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema as InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemCreateOrConnectWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCreateOrConnectWithoutCharacterInput>;
export const InventoryItemCreateOrConnectWithoutCharacterInputObjectZodSchema = makeSchema();
