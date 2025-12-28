import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemUpdateWithoutCharacterInputObjectSchema as InventoryItemUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUpdateWithoutCharacterInput.schema';
import { InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema as InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedUpdateWithoutCharacterInput.schema';
import { InventoryItemCreateWithoutCharacterInputObjectSchema as InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema as InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryItemUpdateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemUpsertWithWhereUniqueWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUpsertWithWhereUniqueWithoutCharacterInput>;
export const InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectZodSchema = makeSchema();
