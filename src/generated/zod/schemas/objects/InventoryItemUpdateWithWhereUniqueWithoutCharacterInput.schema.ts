import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUpdateWithoutCharacterInput.schema';
import { InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedUpdateWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryItemUpdateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemUpdateWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemUpdateWithWhereUniqueWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUpdateWithWhereUniqueWithoutCharacterInput>;
export const InventoryItemUpdateWithWhereUniqueWithoutCharacterInputObjectZodSchema = makeSchema();
