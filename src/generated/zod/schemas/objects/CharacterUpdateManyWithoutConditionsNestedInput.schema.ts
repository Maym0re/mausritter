import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutConditionsInputObjectSchema } from './CharacterCreateWithoutConditionsInput.schema';
import { CharacterUncheckedCreateWithoutConditionsInputObjectSchema } from './CharacterUncheckedCreateWithoutConditionsInput.schema';
import { CharacterCreateOrConnectWithoutConditionsInputObjectSchema } from './CharacterCreateOrConnectWithoutConditionsInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutConditionsInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutConditionsInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutConditionsInput.schema';
import { CharacterUpdateManyWithWhereWithoutConditionsInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutConditionsInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutConditionsInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutConditionsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutConditionsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutConditionsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUpdateManyWithoutConditionsNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithoutConditionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithoutConditionsNestedInput>;
export const CharacterUpdateManyWithoutConditionsNestedInputObjectZodSchema = makeSchema();
