import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutPlayerInputObjectSchema } from './CharacterCreateWithoutPlayerInput.schema';
import { CharacterUncheckedCreateWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateWithoutPlayerInput.schema';
import { CharacterCreateOrConnectWithoutPlayerInputObjectSchema } from './CharacterCreateOrConnectWithoutPlayerInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutPlayerInput.schema';
import { CharacterCreateManyPlayerInputEnvelopeObjectSchema } from './CharacterCreateManyPlayerInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutPlayerInput.schema';
import { CharacterUpdateManyWithWhereWithoutPlayerInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutPlayerInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutPlayerInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutPlayerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutPlayerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyPlayerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutPlayerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUpdateManyWithoutPlayerNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithoutPlayerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithoutPlayerNestedInput>;
export const CharacterUpdateManyWithoutPlayerNestedInputObjectZodSchema = makeSchema();
