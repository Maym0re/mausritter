import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutInventoryInputObjectSchema as CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema as CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutInventoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutInventoryInput>;
export const CharacterCreateOrConnectWithoutInventoryInputObjectZodSchema = makeSchema();
