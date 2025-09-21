import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUpdateWithoutCharacterInput.schema';
import { InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedUpdateWithoutCharacterInput.schema';
import { InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryItemUpdateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemUpsertWithWhereUniqueWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUpsertWithWhereUniqueWithoutCharacterInput>;
export const InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectZodSchema = makeSchema();
