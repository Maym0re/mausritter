import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutCoatInputObjectSchema as CharacterCreateWithoutCoatInputObjectSchema } from './CharacterCreateWithoutCoatInput.schema';
import { CharacterUncheckedCreateWithoutCoatInputObjectSchema as CharacterUncheckedCreateWithoutCoatInputObjectSchema } from './CharacterUncheckedCreateWithoutCoatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutCoatInput>;
export const CharacterCreateOrConnectWithoutCoatInputObjectZodSchema = makeSchema();
