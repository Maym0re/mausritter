import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemScalarWhereInputObjectSchema } from './InventoryItemScalarWhereInput.schema';
import { InventoryItemUpdateManyMutationInputObjectSchema } from './InventoryItemUpdateManyMutationInput.schema';
import { InventoryItemUncheckedUpdateManyWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedUpdateManyWithoutCharacterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryItemUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryItemUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
export const InventoryItemUpdateManyWithWhereWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemUpdateManyWithWhereWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUpdateManyWithWhereWithoutCharacterInput>;
export const InventoryItemUpdateManyWithWhereWithoutCharacterInputObjectZodSchema = makeSchema();
