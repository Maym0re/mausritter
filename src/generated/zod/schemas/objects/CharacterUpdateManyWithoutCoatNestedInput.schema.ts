import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutCoatInputObjectSchema as CharacterCreateWithoutCoatInputObjectSchema } from './CharacterCreateWithoutCoatInput.schema';
import { CharacterUncheckedCreateWithoutCoatInputObjectSchema as CharacterUncheckedCreateWithoutCoatInputObjectSchema } from './CharacterUncheckedCreateWithoutCoatInput.schema';
import { CharacterCreateOrConnectWithoutCoatInputObjectSchema as CharacterCreateOrConnectWithoutCoatInputObjectSchema } from './CharacterCreateOrConnectWithoutCoatInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutCoatInputObjectSchema as CharacterUpsertWithWhereUniqueWithoutCoatInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutCoatInput.schema';
import { CharacterCreateManyCoatInputEnvelopeObjectSchema as CharacterCreateManyCoatInputEnvelopeObjectSchema } from './CharacterCreateManyCoatInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutCoatInputObjectSchema as CharacterUpdateWithWhereUniqueWithoutCoatInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutCoatInput.schema';
import { CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema as CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutCoatInput.schema';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutCoatInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutCoatInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutCoatInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutCoatInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyCoatInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutCoatInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutCoatInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUpdateManyWithoutCoatNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithoutCoatNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithoutCoatNestedInput>;
export const CharacterUpdateManyWithoutCoatNestedInputObjectZodSchema = makeSchema();
