import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutInventoryInputObjectSchema as CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema as CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema';
import { CharacterCreateOrConnectWithoutInventoryInputObjectSchema as CharacterCreateOrConnectWithoutInventoryInputObjectSchema } from './CharacterCreateOrConnectWithoutInventoryInput.schema';
import { CharacterUpsertWithoutInventoryInputObjectSchema as CharacterUpsertWithoutInventoryInputObjectSchema } from './CharacterUpsertWithoutInventoryInput.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema as CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema } from './CharacterUpdateToOneWithWhereWithoutInventoryInput.schema';
import { CharacterUpdateWithoutInventoryInputObjectSchema as CharacterUpdateWithoutInventoryInputObjectSchema } from './CharacterUpdateWithoutInventoryInput.schema';
import { CharacterUncheckedUpdateWithoutInventoryInputObjectSchema as CharacterUncheckedUpdateWithoutInventoryInputObjectSchema } from './CharacterUncheckedUpdateWithoutInventoryInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutInventoryInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)]).optional()
}).strict();
export const CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutInventoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutInventoryNestedInput>;
export const CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectZodSchema = makeSchema();
