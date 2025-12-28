import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemCreateWithoutCharacterInputObjectSchema as InventoryItemCreateWithoutCharacterInputObjectSchema } from './InventoryItemCreateWithoutCharacterInput.schema';
import { InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema as InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema } from './InventoryItemUncheckedCreateWithoutCharacterInput.schema';
import { InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema as InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema } from './InventoryItemCreateOrConnectWithoutCharacterInput.schema';
import { InventoryItemCreateManyCharacterInputEnvelopeObjectSchema as InventoryItemCreateManyCharacterInputEnvelopeObjectSchema } from './InventoryItemCreateManyCharacterInputEnvelope.schema';
import { InventoryItemWhereUniqueInputObjectSchema as InventoryItemWhereUniqueInputObjectSchema } from './InventoryItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => InventoryItemCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryItemCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryItemUncheckedCreateNestedManyWithoutCharacterInputObjectSchema: z.ZodType<Prisma.InventoryItemUncheckedCreateNestedManyWithoutCharacterInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemUncheckedCreateNestedManyWithoutCharacterInput>;
export const InventoryItemUncheckedCreateNestedManyWithoutCharacterInputObjectZodSchema = makeSchema();
