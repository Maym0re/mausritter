import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBackgroundInputObjectSchema } from './CharacterCreateWithoutBackgroundInput.schema';
import { CharacterUncheckedCreateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateWithoutBackgroundInput.schema';
import { CharacterCreateOrConnectWithoutBackgroundInputObjectSchema } from './CharacterCreateOrConnectWithoutBackgroundInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutBackgroundInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutBackgroundInput.schema';
import { CharacterCreateManyBackgroundInputEnvelopeObjectSchema } from './CharacterCreateManyBackgroundInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutBackgroundInput.schema';
import { CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutBackgroundInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

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
export const CharacterUpdateManyWithoutBackgroundNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithoutBackgroundNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithoutBackgroundNestedInput>;
export const CharacterUpdateManyWithoutBackgroundNestedInputObjectZodSchema = makeSchema();
