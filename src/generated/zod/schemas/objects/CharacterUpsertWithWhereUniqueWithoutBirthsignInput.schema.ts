import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutBirthsignInputObjectSchema } from './CharacterUpdateWithoutBirthsignInput.schema';
import { CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedUpdateWithoutBirthsignInput.schema';
import { CharacterCreateWithoutBirthsignInputObjectSchema } from './CharacterCreateWithoutBirthsignInput.schema';
import { CharacterUncheckedCreateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBirthsignInput>;
export const CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectZodSchema = makeSchema();
