import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutCoatInputObjectSchema } from './CharacterUpdateWithoutCoatInput.schema';
import { CharacterUncheckedUpdateWithoutCoatInputObjectSchema } from './CharacterUncheckedUpdateWithoutCoatInput.schema';
import { CharacterCreateWithoutCoatInputObjectSchema } from './CharacterCreateWithoutCoatInput.schema';
import { CharacterUncheckedCreateWithoutCoatInputObjectSchema } from './CharacterUncheckedCreateWithoutCoatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutCoatInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutCoatInput>;
export const CharacterUpsertWithWhereUniqueWithoutCoatInputObjectZodSchema = makeSchema();
