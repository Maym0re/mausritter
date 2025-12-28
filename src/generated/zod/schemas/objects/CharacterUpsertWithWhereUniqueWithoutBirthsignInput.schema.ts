import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutBirthsignInputObjectSchema as CharacterUpdateWithoutBirthsignInputObjectSchema } from './CharacterUpdateWithoutBirthsignInput.schema';
import { CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema as CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedUpdateWithoutBirthsignInput.schema';
import { CharacterCreateWithoutBirthsignInputObjectSchema as CharacterCreateWithoutBirthsignInputObjectSchema } from './CharacterCreateWithoutBirthsignInput.schema';
import { CharacterUncheckedCreateWithoutBirthsignInputObjectSchema as CharacterUncheckedCreateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutBirthsignInput>;
export const CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectZodSchema = makeSchema();
