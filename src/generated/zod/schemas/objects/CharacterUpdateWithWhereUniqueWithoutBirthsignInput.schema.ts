import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutBirthsignInputObjectSchema as CharacterUpdateWithoutBirthsignInputObjectSchema } from './CharacterUpdateWithoutBirthsignInput.schema';
import { CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema as CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedUpdateWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBirthsignInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutBirthsignInput>;
export const CharacterUpdateWithWhereUniqueWithoutBirthsignInputObjectZodSchema = makeSchema();
