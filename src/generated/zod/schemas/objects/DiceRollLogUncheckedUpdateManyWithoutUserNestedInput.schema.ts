import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutUserInputObjectSchema as DiceRollLogCreateWithoutUserInputObjectSchema } from './DiceRollLogCreateWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateWithoutUserInputObjectSchema as DiceRollLogUncheckedCreateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutUserInput.schema';
import { DiceRollLogCreateOrConnectWithoutUserInputObjectSchema as DiceRollLogCreateOrConnectWithoutUserInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutUserInput.schema';
import { DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectSchema as DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DiceRollLogUpsertWithWhereUniqueWithoutUserInput.schema';
import { DiceRollLogCreateManyUserInputEnvelopeObjectSchema as DiceRollLogCreateManyUserInputEnvelopeObjectSchema } from './DiceRollLogCreateManyUserInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectSchema as DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DiceRollLogUpdateWithWhereUniqueWithoutUserInput.schema';
import { DiceRollLogUpdateManyWithWhereWithoutUserInputObjectSchema as DiceRollLogUpdateManyWithWhereWithoutUserInputObjectSchema } from './DiceRollLogUpdateManyWithWhereWithoutUserInput.schema';
import { DiceRollLogScalarWhereInputObjectSchema as DiceRollLogScalarWhereInputObjectSchema } from './DiceRollLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DiceRollLogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DiceRollLogScalarWhereInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedUpdateManyWithoutUserNestedInput>;
export const DiceRollLogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
