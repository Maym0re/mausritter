import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBackgroundInputObjectSchema as CharacterCreateWithoutBackgroundInputObjectSchema } from './CharacterCreateWithoutBackgroundInput.schema';
import { CharacterUncheckedCreateWithoutBackgroundInputObjectSchema as CharacterUncheckedCreateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateWithoutBackgroundInput.schema';
import { CharacterCreateOrConnectWithoutBackgroundInputObjectSchema as CharacterCreateOrConnectWithoutBackgroundInputObjectSchema } from './CharacterCreateOrConnectWithoutBackgroundInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema as CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutBackgroundInput.schema';
import { CharacterCreateManyBackgroundInputEnvelopeObjectSchema as CharacterCreateManyBackgroundInputEnvelopeObjectSchema } from './CharacterCreateManyBackgroundInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema as CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutBackgroundInput.schema';
import { CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema as CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutBackgroundInput.schema';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutBackgroundInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyBackgroundInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedUpdateManyWithoutBackgroundNestedInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutBackgroundNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutBackgroundNestedInput>;
export const CharacterUncheckedUpdateManyWithoutBackgroundNestedInputObjectZodSchema = makeSchema();
