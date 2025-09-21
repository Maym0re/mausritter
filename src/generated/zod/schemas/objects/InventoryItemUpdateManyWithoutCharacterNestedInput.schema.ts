import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema';
import { InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema } from './InventoryItemCreateOrConnectWithoutCharacterInput.schema';
import { InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectSchema } from './InventoryItemUpsertWithWhereUniqueWithoutCharacterInput.schema';
import { InventoryItemCreateManyCharacterInputEnvelopeObjectSchema } from './InventoryItemCreateManyCharacterInputEnvelope.schema';
import { InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema';
import { InventoryItemUpdateWithWhereUniqueWithoutCharacterInputObjectSchema } from './InventoryItemUpdateWithWhereUniqueWithoutCharacterInput.schema';
import { InventoryItemUpdateManyWithWhereWithoutCharacterInputObjectSchema } from './InventoryItemUpdateManyWithWhereWithoutCharacterInput.schema';
import { InventoryItemScalarWhereInputObjectSchema } from './InventoryItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryItemCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryItemUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryItemUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryItemScalarWhereInputObjectSchema), z.lazy(() => InventoryItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryItemUpdateManyWithoutCharacterNestedInputObjectSchema: z.ZodType<Prisma.InventoryItemUpdateManyWithoutCharacterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUpdateManyWithoutCharacterNestedInput>;
export const InventoryItemUpdateManyWithoutCharacterNestedInputObjectZodSchema = makeSchema();
