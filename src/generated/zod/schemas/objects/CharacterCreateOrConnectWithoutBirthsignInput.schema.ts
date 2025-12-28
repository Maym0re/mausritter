import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutBirthsignInputObjectSchema as CharacterCreateWithoutBirthsignInputObjectSchema } from './CharacterCreateWithoutBirthsignInput.schema';
import { CharacterUncheckedCreateWithoutBirthsignInputObjectSchema as CharacterUncheckedCreateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutBirthsignInput>;
export const CharacterCreateOrConnectWithoutBirthsignInputObjectZodSchema = makeSchema();
