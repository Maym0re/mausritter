import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateWithoutCharactersInputObjectSchema } from './ConditionCreateWithoutCharactersInput.schema';
import { ConditionUncheckedCreateWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateWithoutCharactersInput.schema';
import { ConditionCreateOrConnectWithoutCharactersInputObjectSchema } from './ConditionCreateOrConnectWithoutCharactersInput.schema';
import { ConditionUpsertWithWhereUniqueWithoutCharactersInputObjectSchema } from './ConditionUpsertWithWhereUniqueWithoutCharactersInput.schema';
import { ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema';
import { ConditionUpdateWithWhereUniqueWithoutCharactersInputObjectSchema } from './ConditionUpdateWithWhereUniqueWithoutCharactersInput.schema';
import { ConditionUpdateManyWithWhereWithoutCharactersInputObjectSchema } from './ConditionUpdateManyWithWhereWithoutCharactersInput.schema';
import { ConditionScalarWhereInputObjectSchema } from './ConditionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema).array(), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConditionUpsertWithWhereUniqueWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUpsertWithWhereUniqueWithoutCharactersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConditionUpdateWithWhereUniqueWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUpdateWithWhereUniqueWithoutCharactersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConditionUpdateManyWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUpdateManyWithWhereWithoutCharactersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConditionScalarWhereInputObjectSchema), z.lazy(() => ConditionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConditionUpdateManyWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.ConditionUpdateManyWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUpdateManyWithoutCharactersNestedInput>;
export const ConditionUpdateManyWithoutCharactersNestedInputObjectZodSchema = makeSchema();
