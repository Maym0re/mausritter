import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBirthsignInputObjectSchema } from './CharacterCreateWithoutBirthsignInput.schema';
import { CharacterUncheckedCreateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateWithoutBirthsignInput.schema';
import { CharacterCreateOrConnectWithoutBirthsignInputObjectSchema } from './CharacterCreateOrConnectWithoutBirthsignInput.schema';
import { CharacterCreateManyBirthsignInputEnvelopeObjectSchema } from './CharacterCreateManyBirthsignInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutBirthsignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyBirthsignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedCreateNestedManyWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutBirthsignInput>;
export const CharacterUncheckedCreateNestedManyWithoutBirthsignInputObjectZodSchema = makeSchema();
