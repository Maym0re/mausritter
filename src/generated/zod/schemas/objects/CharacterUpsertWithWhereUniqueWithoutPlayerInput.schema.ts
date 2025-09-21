import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutPlayerInputObjectSchema } from './CharacterUpdateWithoutPlayerInput.schema';
import { CharacterUncheckedUpdateWithoutPlayerInputObjectSchema } from './CharacterUncheckedUpdateWithoutPlayerInput.schema';
import { CharacterCreateWithoutPlayerInputObjectSchema } from './CharacterCreateWithoutPlayerInput.schema';
import { CharacterUncheckedCreateWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutPlayerInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutPlayerInput>;
export const CharacterUpsertWithWhereUniqueWithoutPlayerInputObjectZodSchema = makeSchema();
