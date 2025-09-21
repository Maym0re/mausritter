import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBirthsignInputObjectSchema } from './CharacterCreateWithoutBirthsignInput.schema';
import { CharacterUncheckedCreateWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateWithoutBirthsignInput.schema';
import { CharacterCreateOrConnectWithoutBirthsignInputObjectSchema } from './CharacterCreateOrConnectWithoutBirthsignInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutBirthsignInput.schema';
import { CharacterCreateManyBirthsignInputEnvelopeObjectSchema } from './CharacterCreateManyBirthsignInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutBirthsignInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutBirthsignInput.schema';
import { CharacterUpdateManyWithWhereWithoutBirthsignInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutBirthsignInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterCreateWithoutBirthsignInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBirthsignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutBirthsignInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutBirthsignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyBirthsignInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutBirthsignInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutBirthsignInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutBirthsignInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedUpdateManyWithoutBirthsignNestedInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutBirthsignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutBirthsignNestedInput>;
export const CharacterUncheckedUpdateManyWithoutBirthsignNestedInputObjectZodSchema = makeSchema();
