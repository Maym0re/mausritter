import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUpdateWithoutInventoryInputObjectSchema } from './CharacterUpdateWithoutInventoryInput.schema';
import { CharacterUncheckedUpdateWithoutInventoryInputObjectSchema } from './CharacterUncheckedUpdateWithoutInventoryInput.schema';
import { CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterUpsertWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithoutInventoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithoutInventoryInput>;
export const CharacterUpsertWithoutInventoryInputObjectZodSchema = makeSchema();
