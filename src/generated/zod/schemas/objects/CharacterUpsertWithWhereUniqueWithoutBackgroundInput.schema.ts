import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutBackgroundInputObjectSchema } from './CharacterUpdateWithoutBackgroundInput.schema';
import { CharacterUncheckedUpdateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedUpdateWithoutBackgroundInput.schema';
import { CharacterCreateWithoutBackgroundInputObjectSchema } from './CharacterCreateWithoutBackgroundInput.schema';
import { CharacterUncheckedCreateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBackgroundInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBackgroundInput>;
export const CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectZodSchema = makeSchema();
