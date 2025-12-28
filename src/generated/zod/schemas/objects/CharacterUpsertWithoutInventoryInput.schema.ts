import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUpdateWithoutInventoryInputObjectSchema as CharacterUpdateWithoutInventoryInputObjectSchema } from './CharacterUpdateWithoutInventoryInput.schema';
import { CharacterUncheckedUpdateWithoutInventoryInputObjectSchema as CharacterUncheckedUpdateWithoutInventoryInputObjectSchema } from './CharacterUncheckedUpdateWithoutInventoryInput.schema';
import { CharacterCreateWithoutInventoryInputObjectSchema as CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema as CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterUpsertWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithoutInventoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithoutInventoryInput>;
export const CharacterUpsertWithoutInventoryInputObjectZodSchema = makeSchema();
