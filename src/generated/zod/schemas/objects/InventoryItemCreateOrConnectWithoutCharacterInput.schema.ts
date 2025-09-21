import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemCreateOrConnectWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCreateOrConnectWithoutCharacterInput>;
export const InventoryItemCreateOrConnectWithoutCharacterInputObjectZodSchema = makeSchema();
